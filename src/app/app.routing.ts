import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { AddarticleComponent } from './addarticle/addarticle.component';

const arr:Routes=[
  {path:'' ,component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'edit',component:EditarticleComponent},
  {path:'add',component:AddarticleComponent}
];
export const routing=RouterModule.forRoot(arr);
