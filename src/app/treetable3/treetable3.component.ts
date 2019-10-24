import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-treetable3',
  templateUrl: './treetable3.component.html',
  styleUrls: ['./treetable3.component.css']
})
export class Treetable3Component implements OnInit {
  files1: TreeNode[];
  files2: TreeNode[];

  cols: any[];
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files1 = files);
    // this.nodeService.getFilesystem().then(files => this.files2 = files);

    this.files2 = this.myfiles;
    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
  }

  // tslint:disable-next-line:member-ordering
  myfiles: TreeNode[] = [
    {
      data: {
          name: 'Cloud',
          size: '20mb',
          type: 'Folder',
      },
      children: [
          {
              data: {
                  name: 'backup-1.zip',
                  size: '10mb',
                  type: 'Zip',

              },
          },
          {
              data: {
                  name: 'backup-2.zip',
                  size: '10mb',
                  type: 'Zip',

              },
          },
      ],
  },
  {
    data: {
        name: 'Desktop',
        size: '20mb',
        type: 'Folder',
    },
    children: [
        {
            data: {
                name: 'backup-1.zip',
                size: '10mb',
                type: 'Zip',
            },
        },
        {
            data: {
                name: 'backup-2.zip',
                size: '10mb',
                type: 'Zip',
            },
        },
    ],
  }
];
}
