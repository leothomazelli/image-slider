import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageSliderComponent } from './components/imageSlider/image-slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageSliderComponent],
  exports: [ImageSliderComponent],
})
export class ImageSliderModule {}
