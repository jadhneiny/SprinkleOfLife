import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
