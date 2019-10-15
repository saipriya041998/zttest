import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrimedisplayComponent } from './primedisplay/primedisplay.component';
import { PtableComponent } from './ptable/ptable.component';
import { TbootComponent } from './tboot/tboot.component';
import { ArticleresolveService } from './articleresolve.service';

const arr:Routes=[
  {path:'', component: HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'prime',resolve:{adata:ArticleresolveService},component:PrimedisplayComponent},
  {path:'ptable',component:PtableComponent},
  {path:'boot',component:TbootComponent}
];

export const routing=RouterModule.forRoot(arr);
