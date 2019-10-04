import { Component } from '@angular/core';
import { ArticleService } from './article.service';
// import { Kbarticle } from './home/kbarticle';
// import { Pageinfo } from './home/pageinfo';
// import { Ddlcategory } from './home/ddlcategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZoomTeams';
constructor(private _data:ArticleService){}
// page: Pageinfo;
// cat: Ddlcategory[] = [];
// totalItem: number;
// totalPages: number;
// Page= 1;
// arr3: Kbarticle[] = [];
// ngvariable= false;
// serarr: Kbarticle[] = [];
// all_articles: Kbarticle[] = [];
// arr:Kbarticle[]=[];
//   onMenuClickForSearch(value) {
//     console.log(value);
//     if (value != '') {
//       this._data.getsearchedrecord(value).subscribe(
//         (data: Kbarticle[]) => {
//           console.log(data);
//           this.serarr = data;
//           this.page = data['pagerInfo'];
//           this.totalItem = this.page.totalItems;
//           this.totalPages = this.page.totalPages;
//           this.all_articles = this.serarr['kbArticles'];
//         }
//       );
//     } else {
//       this._data.getAllkbArticles().subscribe(
//         (data: Kbarticle[]) => {
//           console.log('jj');
//           this.arr = data;
//           this.all_articles = this.arr['kbArticles'];
//           this.page = data['pagerInfo'];
//           this.totalItem = this.page.totalItems;
//           this.totalPages = this.page.totalPages;
//           this.all_articles = this.serarr['kbArticles'];
//         }
//       );
//     }
//   }
}
