import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCarouselComponent } from './components/full-carousel/full-carousel.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCarouselComponent,
    CardCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
