import { Component, OnInit } from '@angular/core';
import { Kbarticle } from '../home/kbarticle';
import { MenuItem, MessageService } from 'primeng/api';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-primedisplay',
  templateUrl: './primedisplay.component.html',
  styleUrls: ['./primedisplay.component.css']
})
export class PrimedisplayComponent implements OnInit {

  cars: Kbarticle[];

  cols: any[];

  selectedCar: Kbarticle;

  selectCars: Kbarticle[];

  items: MenuItem[];
  constructor(private _data:ArticleService,private messageService:MessageService) { }

  ngOnInit() {
    this._data.getAllkbArticles().subscribe(
      (data:Kbarticle[])=>{
        console.log(data);
        this.cars=data;

        this.selectCars=this.cars['kbArticles'];
        console.log(this.selectCars);
      }
    );
    this.cols = [
      { field: 'articleId', header: 'Article Id' },
      { field: 'articleName', header: 'Article Name' },
      { field: 'content', header: 'Content' },
      { field: 'categoryId', header: 'CategoryId' }
  ];
  this.items = [
   { label: 'View', icon: 'pi pi-search', command: () => this.viewCar(this.selectedCar) },
    { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) }
];

  }
  viewCar(car: Kbarticle) {
    this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.articleId + ' - ' + car.articleName });
}

deleteCar(car: Kbarticle) {
  console.log(car);
  let index = -1;
  for (let i = 0; i < this.selectCars.length; i++) {
        if (this.selectCars[i].articleId == car.articleId) {
            index = i;
            break;
        }
    }
  this.selectCars.splice(index, 1);
  this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.articleId + ' - ' + car.articleName });
}
}
