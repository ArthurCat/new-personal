import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { PortfolioComponent } from './portfolio.component';
import { SkillsComponent } from './skills.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about'},
  { path: 'about',  component: AboutComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

