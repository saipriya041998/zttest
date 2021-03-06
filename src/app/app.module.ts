import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { CapsPipe } from './caps.pipe';
import { CardDirective } from './card.directive';
// import {ShContextMenuModule} from 'ng2-right-click-menu'
import { ContextMenuModule} from 'primeng/contextmenu';
import { ContextdemoComponent } from './contextdemo/contextdemo.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { PrimedisplayComponent } from './primedisplay/primedisplay.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { PtableComponent } from './ptable/ptable.component';
import { SharedModule } from 'primeng/components/common/shared';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TbootComponent } from './tboot/tboot.component';
import { TreetableComponent } from './treetable/treetable.component';
import {TreeTableModule} from 'primeng/treetable';
import { Treetable2Component } from './treetable2/treetable2.component';
import { Treetable3Component } from './treetable3/treetable3.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { NodeService } from './node.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    SidebarComponent,
    ReverseStrPipe,
    CapsPipe,
    CardDirective,
    ContextdemoComponent,
    PrimedisplayComponent,
    PtableComponent,
    TbootComponent,
    TreetableComponent,
    Treetable2Component,
    Treetable3Component


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    NgbAlertModule,
    routing,
    ContextMenuModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    VirtualScrollerModule,
    SharedModule,
    ConfirmDialogModule,
    TreeTableModule,
    MultiSelectModule


    // ShContextMenuModule
  ],
  providers: [MessageService, ConfirmationService, NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
