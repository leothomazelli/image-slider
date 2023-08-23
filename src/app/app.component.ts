import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sliderPractice';
  slides: SlideInterface[] = [
    { url: 'assets/gelato.jpg', title: 'gelato' },
    { url: 'assets/grilled.jpg', title: 'grilled' },
    { url: 'assets/hamburguer.jpg', title: 'hamburguer' },
    { url: 'assets/hotdogs.jpg', title: 'hotdogs' },
    { url: 'assets/japanese.jpg', title: 'japanese' },
  ];
}
