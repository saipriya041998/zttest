import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
dispplay_article='https://0b22da3c.ngrok.io/api/KB/GetArticles?getall=0&categ=';
add_article= "https://0b22da3c.ngrok.io/api/KB/InsertUpdateKBAricles";
update= "https://0b22da3c.ngrok.io/api/KB/InsertUpdateKBAricles";
article_by_id='https://0b22da3c.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
readmore='https://0b22da3c.ngrok.io/api/KB/GetReadArticle?ArticleId=';
pagination= "https://0b22da3c.ngrok.io/api/KB/GetArticles?getall=0&categ=&";
getcateg='https://0b22da3c.ngrok.io/api/KB/GetCategories';
search="https://0b22da3c.ngrok.io/api/KB/GetArticles?getall=0&categ=&Page=1&SearchString=";
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
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.update, body, {headers: head});
  }
  onReadArticle(item) {
    return this._http.get(this.readmore + item);
  }
  getPageByNumber(num) {
      this.concat = "categ=" +'&Page='+ num;
      return this._http.get(this.pagination + this.concat);
  }
  getsearchedrecord(serchstring){
    return this._http.get(this.search+serchstring);
  }

}
