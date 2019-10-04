import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  visibleSidebar:boolean;
  ngOnInit() {
    this.visibleSidebar=false;
    // this.onsidebaropen();
  }
  onsidebaropen() {
    this.visibleSidebar = true;
  }
}
