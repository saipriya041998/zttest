import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule,NgbAlertModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { CapsPipe } from './caps.pipe';
import { CardDirective } from './card.directive';
// import {ShContextMenuModule} from 'ng2-right-click-menu'
import {ContextMenuModule} from 'primeng/contextmenu';
import { ContextdemoComponent } from './contextdemo/contextdemo.component';

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
    ContextMenuModule

    // ShContextMenuModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
