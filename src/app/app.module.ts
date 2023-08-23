import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderModule } from './imageSlider/image-slider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
