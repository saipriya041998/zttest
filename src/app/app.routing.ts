import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrimedisplayComponent } from './primedisplay/primedisplay.component';
import { PtableComponent } from './ptable/ptable.component';
import { TbootComponent } from './tboot/tboot.component';
import { ArticleresolveService } from './articleresolve.service';
import { TreetableComponent } from './treetable/treetable.component';
import { Treetable2Component } from './treetable2/treetable2.component';

const arr: Routes = [
  {path:'', component: HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'prime',resolve: {adata:ArticleresolveService}, component: PrimedisplayComponent},
  {path:'ptable',component: PtableComponent},
  {path:'boot',component: TbootComponent},
  {path:'tree',component:TreetableComponent},
  {path:'tree2',component:Treetable2Component}
];

export const routing=RouterModule.forRoot(arr);
