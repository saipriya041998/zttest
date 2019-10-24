import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-treetable2',
  templateUrl: './treetable2.component.html',
  styleUrls: ['./treetable2.component.css']
})
export class Treetable2Component implements OnInit {
    constructor(private nodeService: NodeService, private messageService: MessageService) { }
  files: TreeNode[];
  selectedNode: TreeNode;
  cols: any[];
  items: MenuItem[];
  files2: TreeNode[];
  selectedColumns: any[];
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

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.files2 = this.myfiles;
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.selectedColumns = this.cols;
        this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
            { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
        ];
    }

    viewFile(node) {
        this.messageService.add({ severity: 'info', summary: 'Record Selected', detail: node.data.name + ' - ' + node.data.size });
    }

    toggleFile(node) {
        node.expanded = !node.expanded;
        this.files = [...this.files];
    }
}
