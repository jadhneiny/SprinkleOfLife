import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OurStoryComponent } from './our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageComponent,
    OurStoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
