import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
@ViewChild(SidebarComponent, {static: true}) sideviewchild: SidebarComponent;
@Output() search = new EventEmitter();
  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.onClicksidebar();
  }
  onSearchClick(searchTerm) {
    this.search.emit(searchTerm);
  }

  onClicksidebar() {
    this.sideviewchild.onsidebaropen();
  }

}
