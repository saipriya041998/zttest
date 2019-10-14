import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ArticleService } from '../article.service';
import { Kbarticle } from './kbarticle';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Pageinfo } from './pageinfo';
import { Ddlcategory } from './ddlcategory';
import { MessageService } from 'primeng/components/common/messageservice';
import { MenuItem } from 'primeng/api';
// import { ShAttachMenuDirective, ShContextMenuComponent } from 'ng2-right-click-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  visibleSidebar1;
  arr: Kbarticle[] = [];
  all_articles: Kbarticle[] = [];
  kb: FormGroup;
  updatedid: any;
  arrbyid: Kbarticle[] = [];
  all_arrbyid: Kbarticle[] = [];
  article_id: any;
  arr1: Kbarticle[] = [];
  article_id1 : any;
  closeResult: string;
  arr2: Kbarticle[] = [];
  readarr: Kbarticle;
  page: Pageinfo;
  cat: Ddlcategory[] = [];
  totalItem: number;
  totalPages: number;
  Page = 1;
  // data:ShContextMenuComponent;
  arr3: Kbarticle[] = [];
  ngvariable= false;
  serarr: Kbarticle[] = [];
  char :any='ggg';
  display:boolean=false;
  id;
  constructor(private _data: ArticleService,private route:Router, private fb: FormBuilder, private messageService: MessageService, private modalService: NgbModal, private act: ActivatedRoute, private config: NgbModalConfig) {
    config.backdrop ='static';
    config.keyboard = false;
   }

  ngOnInit() {

    this.items = [
      {
          label: 'File',
          icon:'fa fa-file',
          items: [{
                  label: 'New',
                  icon: 'fa fa-plus',
                  items: [
                      {label: 'Article', icon:'fa fa-newspaper-o',command:(click:any)=>{
                        this.display=true;
                      }}
                  ]
              },
          ]
      },
      {
          label: 'Edit',
          icon: 'fa fa-pencil',
          command:(click:any)=>{
            this.display=true;
          },
              // {label: 'Delete', icon: 'fa fa-trash'},
      },{label: 'Refresh', icon: 'fa fa-refresh',
      command:(click:any)=>{
        window.location.reload();
      }
      },{label: 'Quit',icon:'fa fa-close'}
  ];
    console.log(this.char);
    this.kb = this.fb.group({
        articleId: new FormControl(),
        articleName: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required),
        previewContent: new FormControl(),
        categoryId: new FormControl(),
        categoryName: new FormControl(),
        createdBy: new FormControl(),
        createdByName: new FormControl(),
        createdDate: new FormControl(),
        modifiedBy: new FormControl(),
        modifiedByName: new FormControl(),
        modifiedDate: new FormControl()
      });
    this._data.getAllkbArticles().subscribe(
        (data: Kbarticle[]) => {
         this.arr = data;
         console.log(this.arr);
         this.all_articles = this.arr['kbArticles'];
         this.ngvariable = true;
         console.log(this.all_articles);
        }
      );
    this.getPageInformation();
    this.getcatogeries();
  }
  openAddPopup(Addpopup) {
      this.modalService.open(Addpopup, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
    } else {
    return `with: ${reason}`;
    }
    }
  ArticleSave(item) {
    this._data.addArticle(item
      // alternate method
    //   new Kbarticle(
    //     this.kb.value.articleId,
    //     this.kb.value.articleName,
    //     this.kb.value.content,
    //     this.kb.value.previewContent,
    //     this.kb.value.categoryId,
    //     this.kb.value.categoryName,
    //     this.kb.value.createdBy,
    //     this.kb.value.createdByName,
    //     this.kb.value.createdDate,
    //     this.kb.value.modifiedBy,
    //     this.kb.value.modifiedByName,
    //     this.kb.value.modifiedDate
    // )
    ).subscribe(
     (x: any) => {
        // alert("Added successfully");
        this.id=setInterval(()=>{
          this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Article Added successfully'});
        }, 3000);
        this._data.getAllkbArticles().subscribe(
          (data: Kbarticle[]) => {
            this.arr = data;
            console.log(this.arr);
            this.all_articles = this.arr['kbArticles'];
            console.log(this.all_articles);
          }
        );
        this.modalService.dismissAll();
      }

    );
    console.log('completed');

  }
  // getArticleByIds(item){
  //   this._data.getArticleById(item).subscribe(
  //     (data:Kbarticle[])=>{
  //       this.arrbyid=data;
  //       console.log(this.arrbyid);
  //       this.all_arrbyid=this.arrbyid['kbArticles'];
  //       console.log(this.all_arrbyid);

  //     }
  //   );
  // }

  openEditPopup(Editpopup, item) {
console.log(item);
    // this.updatedid=item.articleId
    // console.log(this.updatedid);
    //  this.article_id1=this.updatedid.articleId;
    //  console.log(this.article_id1);

this.kb.patchValue({
      articleId: this.all_articles[item].articleId,
      articleName: this.all_articles[item].articleName,
      content: this.all_articles[item].content,
      previewContent: this.all_articles[item].previewContent,
      categoryId: this.all_articles[item].categoryId,
      categoryName: this.all_articles[item].categoryName,
      createdBy: this.all_articles[item].createdBy,
      createdByName: this.all_articles[item].createdByName,
      createdDate: this.all_articles[item].createdDate,
      modifiedBy: this.all_articles[item].modifiedBy,
      modifiedByName: this.all_articles[item].modifiedByName,
      modifiedDate: this.all_articles[item].modifiedDate
    });
this.modalService.open(Editpopup, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
}
UpdateArticles(item) {
  console.log(item);
  console.log(item.articleId);
  this._data.updateArticle(item).subscribe(
        (x: any) => {
          // alert('updated successfully')
          setTimeout(()=>{

            this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Updated successfully'});
       }, 3000);
          this._data.getAllkbArticles().subscribe(
      (data: Kbarticle[]) => {
        this.arr = data;
        this.page = data['pagerInfo'];
        this.totalItem = this.page.totalItems;
        this.totalPages = this.page.totalPages;
        console.log(this.arr);
        this.all_articles = this.arr['kbArticles'];
        console.log(this.all_articles);
      }
    );
          this.kb.reset();
          this.modalService.dismissAll();

        }
      );
    }
    onReadMore(Readmore, item) {
      console.log(item);
      this.modalService.open(Readmore, {
        size:'xl'
      });
      this._data.onReadArticle(item.articleId).subscribe(
      (x: any) => {
        this.readarr = x;
        console.log(this.readarr);
      }
      );
    }
    getPageInformation() {
      this._data.getAllkbArticles().subscribe(
        (data: Kbarticle[]) => {
          this.arr2 = data;
          this.page = data['pagerInfo'];
          console.log(this.page);
          this.totalItem = this.page.totalItems;
          // this.totalPages = this.page.totalPages;
          this.all_articles = this.arr['kbArticles'];
        }
      );
    }
    showPage(number: number) {
      number = this.Page;
      console.log(number);
      if (number != 0) {
        this._data.getPageByNumber(number).subscribe(
          (x: any) => {
            this.arr3 = x;
            console.log(this.arr3);
            this.all_articles = this.arr3['kbArticles'];
            console.log(this.all_articles);
          }
        );
      }
    }
    getcatogeries() {
      this._data.getCat().subscribe(
        (x: Ddlcategory[]) => {
          console.log(x);
          this.cat = x;
          console.log(this.cat);

        }
      );
    }
    onMenuClickForSearch(value) {
      if (value != '') {
        this._data.getsearchedrecord(value).subscribe(
          (data: Kbarticle[]) => {
            this.serarr = data;
            this.page = data['pagerInfo'];
            this.totalItem = this.page.totalItems;
            this.totalPages = this.page.totalPages;
            this.all_articles = this.serarr['kbArticles'];
          }
        );
      } else {
        this._data.getAllkbArticles().subscribe(
          (data: Kbarticle[]) => {
            this.arr = data;
            this.all_articles = this.arr['kbArticles'];
            this.page = data['pagerInfo'];
            this.totalItem = this.page.totalItems;
            this.totalPages = this.page.totalPages;
            this.all_articles = this.serarr['kbArticles'];
          }
        );
      }
    }

}


