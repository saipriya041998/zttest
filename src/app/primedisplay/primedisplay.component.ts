import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kbarticle } from '../home/kbarticle';
import { MenuItem, MessageService } from 'primeng/api';
import { ArticleService } from '../article.service';
import { Pageinfo } from '../home/pageinfo';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-primedisplay',
  templateUrl: './primedisplay.component.html',
  styleUrls: ['./primedisplay.component.css']
})
export class PrimedisplayComponent implements OnInit,OnDestroy {
  display:boolean=false;
  cars: Kbarticle[];
  cols: any[];
  selectedCar: Kbarticle;
  selectCars: Kbarticle[];
  page:Pageinfo;
  items: MenuItem[];
  totalitem:number;
  totalpage:number;
  kb:FormGroup;
  arr:Kbarticle[];
  all_articles:Kbarticle[];
  fetchedarray:Kbarticle;
  id;
  constructor(private _data:ArticleService,private messageService:MessageService,private fb:FormBuilder) { }

  ngOnInit() {
    this.kb = this.fb.group({
        articleId: new FormControl(),
        articleName: new FormControl(null),
        content: new FormControl(null),
        previewContent: new FormControl(),
        categoryId: new FormControl(),
        categoryName: new FormControl(),
        createdBy: new FormControl(),
        createdByName: new FormControl(),
        createdDate: new FormControl(),
        modifiedBy: new FormControl(),
        modifiedByName: new FormControl(),
        modifiedDate: new FormControl()
      });

    // this.getAllArticles();
    this.id=setInterval(()=>{
      this.getAllArticles();
    },5000);
    console.log(this.id);
    this.cols = [
      { field: 'articleId', header: 'Article Id',icon:'fa fa-sort' },
      { field: 'articleName', header: 'Article Name',icon:'fa fa-sort' },
      { field: 'content', header: 'Content',icon:'fa fa-sort' },
      { field: 'categoryId', header: 'Category Id' ,icon:'fa fa-sort'}
  ];
    this.items = [
    { label:'View', icon: 'fa fa-search', command: (event) => this.viewArticle(this.selectedCar) },
    { label:'Delete', icon: 'fa fa-times', command: (event) => this.deleteArticle(this.selectedCar) },
    { label:'Edit',icon:'fa fa-pencil',command:(event)=>this.editArticle(this.selectedCar)}
];
}
ngOnDestroy(){
// if(this.id){
//   clearInterval(this.id);
// }
}
viewArticle(car: Kbarticle) {
    this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.articleId + ' - ' + car.articleName });
}

deleteArticle(car: Kbarticle) {
  console.log(car);
  let index = -1;
  for (let i = 0; i < this.selectCars.length; i++) {
        if (this.selectCars[i].articleId  == car.articleId) {
            index = i;
            break;
        }
    }
  this.selectCars.splice(index, 1);
  this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.articleId + ' - ' + car.articleName });
}
editArticle(car:Kbarticle){
  this.display=true;
  console.log(car);
  this.fetchedarray=car;
  console.log(this.fetchedarray);
  this.kb.patchValue({
    articleId:this.fetchedarray.articleId,
    articleName:this.fetchedarray.articleName,
    categoryName:this.fetchedarray.categoryName,
    content:this.fetchedarray.content
  });

}
getAllArticles(){
  this._data.getAllkbArticles().subscribe(
    (data:Kbarticle[])=>{
      console.log(data);
      this.cars=data;
      this.selectCars=this.cars['kbArticles'];
      this.page=data['pagerInfo'];
      this.totalitem=this.page.totalItems;
      console.log(this.totalitem);
      this.totalpage=this.page.totalPages;
      console.log(this.totalpage);
      console.log(this.selectCars);
    }
  );
  clearInterval(this.id);
}
UpdateArticles(item) {
  console.log(item);
  console.log(item.articleId);
  this._data.updateArticle(item).subscribe(
        (x: any) => {
          this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Updated successfully'});
    //       this._data.getAllkbArticles().subscribe(
    //   (data: Kbarticle[]) => {
    //     this.arr = data;
    //     this.all_articles = this.arr['kbArticles'];
    //   }
    // );
          this.kb.reset();
        }
      );
    }
}
