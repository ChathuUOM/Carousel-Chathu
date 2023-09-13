import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCarouselComponent } from './components/full-carousel/full-carousel.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCarouselComponent,
    CardCarouselComponent,
    SwitchThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
