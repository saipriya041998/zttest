import { Injectable } from '@angular/core';
import { ArticleResolve } from './home/kbarticle';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArticleService } from './article.service';
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleresolveService implements Resolve<ArticleResolve> {
  constructor(private _data:ArticleService) { }
  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._data.getAllkbArticles().pipe(
      map(x=>({data:x,error:''})),
      catchError(err=>{
        return of({data:null,error:err.message});
      })
    );
  }
}
