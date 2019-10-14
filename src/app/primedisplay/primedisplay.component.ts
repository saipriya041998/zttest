import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kbarticle } from '../home/kbarticle';
import { MenuItem, MessageService } from 'primeng/api';
import { ArticleService } from '../article.service';
import { Pageinfo } from '../home/pageinfo';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ddlcategory } from '../home/ddlcategory';
import * as _ from "lodash";
import {ConfirmationService} from 'primeng/api';

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
  categories:Ddlcategory[];
  cat2:Ddlcategory[];
  constructor(private _data:ArticleService,private messageService:MessageService,private fb:FormBuilder,private confirmation:ConfirmationService) { }

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
    this.getAllArticles();
    this.getcate();
    this.id=setInterval(()=>{
      this.getAllArticles();
    },5000);
    console.log(this.id);
    this.cols = [
      { field: 'articleId', header: 'Article Id',icon:'fa fa-sort' },
      { field: 'articleName', header: 'Article Name',icon:'fa fa-sort' },
      { field: 'content', header: 'Content',icon:'fa fa-sort' },
      { field: 'categoryId', header: 'Category Id' ,icon:'fa fa-sort'},
      { field:'categoryName',header:'Category Name'}
  ];
    this.items = [
    { label:'View', icon: 'fa fa-search', command: (event) => this.viewArticle(this.selectedCar) },
    { label:'Delete', icon: 'fa fa-times', command: (event) => this.deleteArticle(this.selectedCar) },
    { label:'Edit',icon:'fa fa-pencil',command:(event)=>this.editArticle(this.selectedCar)}
];
}
viewArticle(car: Kbarticle) {
    this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.articleId + ' - ' + car.articleName });
}
deleteArticle(car: Kbarticle) {
  this.confirm(car);

}
editArticle(car:Kbarticle){
  this.display=true;
  console.log(car);
  this.fetchedarray=car;
  console.log(this.fetchedarray);
  this.kb.patchValue({
    articleId: this.fetchedarray.articleId,
    articleName: this.fetchedarray.articleName,
    categoryId:this.fetchedarray.categoryId,
    categoryName: this.fetchedarray.categoryName,
    content: this.fetchedarray.content
  });
}
getAllArticles(){
  this._data.getAllkbArticles().subscribe(
    (data:Kbarticle[])=>{
      console.log(data);
      this.cars=data;
      this.selectCars=this.cars['kbArticles'];
      console.log(this.selectCars);
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
          this.getAllArticles();
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
    getcate(){
      this._data.getCat().subscribe(
        (data:Ddlcategory[])=>{
          this.categories=data;
          console.log(this.categories);
          this.cat2=this.filterformatDataforDropdown('categoryName',this.categories,'');
          console.log('formated data:',this.cat2);
        }
      );
    }
    public filterformatDataforDropdown(label, data, Placeholdervalue?) {
      console.log(data);
      let formatdata = [];
      let customdata = {
        label: null,
        value: null
      };
      if (!_.isEmpty(Placeholdervalue)) {
        formatdata.push({
          label: Placeholdervalue,
          value: null
        });
      }
      _.forEach(data, function (value) {
        console.log(value);
        var catid=value.categoryId;
        console.log(catid);
        var shallow = _.clone(customdata);
        shallow.label = value[label];
        shallow.value = catid;
        formatdata.push(shallow);
      });
      return formatdata;
    }
    confirm(car:Kbarticle) {
      this.confirmation.confirm({
          message: 'Are you sure that you want to delete this record?',
          accept: () => {
              //Actual logic to perform a confirmation
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
      });
  }
    ngOnDestroy(){
      // if(this.id){
      //   clearInterval(this.id);
      // }
   }
}
