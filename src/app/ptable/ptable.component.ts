import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Kbarticle } from '../home/kbarticle';
import { Ddlcategory } from '../home/ddlcategory';
import * as _ from "lodash";

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
arr:Kbarticle[];
cars: Kbarticle[];
selectCars: Kbarticle[];
cols: any[];
cat:Ddlcategory[];
cat1:Ddlcategory[];

  constructor(private _data:ArticleService) { }

  ngOnInit() {
    this.getarticles();
    this.getcatogories();
    this.cols = [
      { field: 'articleId', header: 'Article Id' },
      { field: 'articleName', header: 'Article Name' },
      { field: 'categoryId', header: 'Category Id' },
      { field: 'categoryName', header: 'Category Name'},
      { field: 'content', header: 'Content' },
  ];
  // this.cat1=[
  //   { label: 'All Category', value: null },
  //   { label: '1', value: 'Accounts Recivables - Collections'},
  //   { label: '2', value: 'Surgical Authorizations & Verifications'},
  //   { label: '3', value: 'Office - Practice Management'}
  // ];
  }
getarticles(){
this._data.getAllkbArticles().subscribe(
  (data:Kbarticle[])=>{
  this.cars=data;
  this.selectCars=this.cars['kbArticles'];
  console.log(this.selectCars);
  }
);
}
getcatogories(){
  this._data.getCat().subscribe(
    (data:Ddlcategory[]) => {
      this.cat = data;
      console.log(this.cat);
      this.cat1=this.filterformatDataforDropdown("categoryName",this.cat,"All Categories");
      console.log(this.cat1);
    }
  );
}
public filterformatDataforDropdown(label, data, Placeholdervalue?) {
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
    var shallow = _.clone(customdata);
    shallow.label = value[label];
    shallow.value = value[label];
    formatdata.push(shallow);
  });
  return formatdata;
}
}
