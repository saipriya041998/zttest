import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { ArticleService } from '../article.service';
import { Kbarticle } from '../home/kbarticle';

@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.css']
})
export class TreetableComponent implements OnInit {
arr:Kbarticle[];
files2: Kbarticle[];
cols: any[];
items: MenuItem[];
selectedNode: Kbarticle;
  constructor(private data: ArticleService,private messageService: MessageService) { }

  ngOnInit() {
     this.data.getAllkbArticles().subscribe(
      (data:any[])=>{
        this.arr=data;
        console.log(this.arr);
        this.files2=this.arr['kbArticles'];
        console.log(this.files2);
       }
     );

     this.cols = [
          { field: 'articleId', header: 'articleId' },
          { field: 'articleName', header: 'articleName' }

      ];
     this.items = [
        { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
        { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
    ];
  }

  viewFile(node) {
    this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.articleId});
}

toggleFile(node) {
    node.expanded = !node.expanded;
    this.files2 = [...this.files2];
}
}
