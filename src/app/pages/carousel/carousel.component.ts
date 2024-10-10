import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  ads = [
    { tittle: 'Promo 1', description: 'Descripción de la promo 1' },
    { tittle: 'Promo 2', description: 'Descripción de la promo 2' },
    { tittle: 'Promo 3', description: 'Descripción de la promo 3' }
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.ads.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.ads.length - 1) ? 0 : this.currentSlide + 1;
  }
}
