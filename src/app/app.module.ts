import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { TimelineComponent } from './timeline.component';
import { PortfolioComponent } from './portfolio.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    TimelineComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
