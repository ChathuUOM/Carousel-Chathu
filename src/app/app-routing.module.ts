import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCarouselComponent } from './components/full-carousel/full-carousel.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: FullCarouselComponent },
  { path: 'card', component: CardCarouselComponent },
  { path: 'more', component: MoreInfoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
