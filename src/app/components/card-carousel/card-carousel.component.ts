import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'conv-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   // Adding navigation for card list page
   navigateTo(route: string): void {
    window.open(route, '_blank');
  }

}
