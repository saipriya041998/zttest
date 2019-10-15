import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Kbarticle } from '../home/kbarticle';

@Component({
  selector: 'app-tboot',
  templateUrl: './tboot.component.html',
  styleUrls: ['./tboot.component.css']
})
export class TbootComponent implements OnInit {
articles:Kbarticle[];
art2:Kbarticle[];
  constructor(private _data:ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }
 getArticles(){
  this._data.getAllkbArticles().subscribe(
    (data:Kbarticle[])=>{
      this.articles=data;
      console.log(this.articles);
      this.art2=this.articles['kbArticles'];
      console.log(this.art2);
    }
  );
 }
}
