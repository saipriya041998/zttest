import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,AfterViewInit {
display:boolean=false;
visibleSidebar:boolean=false;
@ViewChild(SidebarComponent, {static: true}) sideviewchild: SidebarComponent;

@Output() search = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.onClicksidebar();
  }
  onSearchClick(searchTerm) {
    console.log(searchTerm);
    this.search.emit(searchTerm);
  }
  onClicksidebar() {
    this.display=true;
    this.visibleSidebar=true;
    this.sideviewchild.onsidebaropen();
  }
}
