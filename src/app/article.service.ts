import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';
import { appconstant } from './app.constant';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  dispplay_article = appconstant.api + 'GetArticles?getall=0&categ=';
  add_article=appconstant.api + 'InsertUpdateKBAricles';
  update=appconstant.api + 'InsertUpdateKBAricles';
  article_by_id=appconstant.api + 'GetKBArticlesById?ArticleId=';
  readmore=appconstant.api + 'GetReadArticle?ArticleId=';
  pagination=appconstant.api + 'GetArticles?getall=0&categ=&';
  getcateg=appconstant.api + 'GetCategories';
  search=appconstant.api + 'GetArticles?getall=0&categ=&Page=1&SearchString=';
  concat: string;

  constructor(private _http: HttpClient) { }

  getAllkbArticles() {
    return this._http.get(this.dispplay_article);
  }
  addArticle(item) {
    console.log(item);
    console.log('inside service');
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.add_article, body, {headers: head});
  }
  getCat() {
    return this._http.get(this.getcateg);
  }
  getArticleById(article_id) {
    return this._http.get(this.article_by_id + article_id);
  }
  updateArticle(item) {
    console.log(item);
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.update, body, {headers: head});
  }
  onReadArticle(item) {
    return this._http.get(this.readmore + item);
  }
  getPageByNumber(num) {
      this.concat = 'categ=' +'&Page='+ num;
      return this._http.get(this.pagination + this.concat);
  }
  getsearchedrecord(serchstring){
    return this._http.get(this.search+serchstring);
  }

}
