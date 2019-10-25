import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { NodeService } from '../node.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-treetable2',
  templateUrl: './treetable2.component.html',
  styleUrls: ['./treetable2.component.css']
})
export class Treetable2Component implements OnInit {
    constructor(private nodeService: NodeService, private messageService: MessageService,private fb:FormBuilder) { }
    newCar: boolean;
    displayDialog: boolean;
    cars: TreeNode[];
    car: TreeNode = {};
    selectedCar: TreeNode;
    display:boolean=false;
    node:TreeNode;
    addform:FormGroup;
    result: TreeNode;
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

      this.addform=this.fb.group({
        name:new FormControl(null),
        size:new FormControl(null),
        type:new FormControl(null)
      });
      this.nodeService.getFilesystem().then(files => {
        this.files = files;
        console.log(this.files);
      });

      this.files2 = this.myfiles;

      this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
      this.selectedColumns = this.cols;
      this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
            { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) },
            { label: 'Add', icon: 'pi pi-plus', command: (event) => this.openaddpopup(this.selectedNode) },
            { label: 'Delete', icon: 'pi pi-plus', command: (event) => this.delete(this.selectedNode) }
        ];
    }

    viewFile(node) {
        this.messageService.add({ severity: 'info', summary: 'Record Selected', detail: node.data.name + ' - ' + node.data.size });
    }

    toggleFile(node) {
        node.expanded = !node.expanded;
        this.files = [...this.files];
    }
    openaddpopup(node){
      this.node=node;
      this.display=true;
    }
  delete(node){
    this.node=node;
    console.log(node);
  //   if (this.node && this.node.parent) {
  //     let index = this.node.parent.children.indexOf(this.node);
  //     this.node.parent.children.splice(index,1);
  // }
    // console.log(Object.values(this.node));
    // let temp=Object.values(this.node);
    // this.files.splice(node,1);
    // this.files.splice(node,1);

    // console.log(temp);
    // temp.splice(2,1);
    // console.log(temp);
    // var i=node.map(
    //   function(item) {
    //     return item.data;
    //   }
    //   ).indexOf();
    // console.log(i);
    // node.splice(i, 1);
    // console.log(this.node);
    // this.node['data'].splice(node);



    if (this.node.parent==null) {
      this.files.splice(node, 1);
    } else {
      let index = this.node.parent.children.indexOf(this.node);
      this.node.parent.children.splice(index,1);
    }


    // this.node['data'].splice();
    // this.node['children'].splice(node,1);
  }
    save(item){
      this.result = {
        data: {
          'name':this.addform.value.name,
          'size':this.addform.value.size,
          'type':this.addform.value.type,

        },
      children: []
      }
      this.node['children'].push(this.result);
      this.display=false;
      this.addform.reset();
    }

}
