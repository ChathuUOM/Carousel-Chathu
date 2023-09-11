import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCarouselComponent } from './components/full-carousel/full-carousel.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: FullCarouselComponent },
  { path: 'card', component: CardCarouselComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
