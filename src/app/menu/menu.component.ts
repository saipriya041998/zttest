import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Output() search=new EventEmitter();
  constructor() { }
  visibleSidebar1;
  ngOnInit() {
  }
  onSearchClick(searchTerm){
    this.search.emit(searchTerm);
  }

}
