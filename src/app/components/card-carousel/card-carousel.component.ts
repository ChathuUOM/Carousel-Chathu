import { Component, OnInit} from '@angular/core';
import { IHCarouselItem } from 'src/app/model/h-carousel.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'conv-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent implements OnInit {
  hCarouselData: IHCarouselItem[] = [];
  linkText: string = 'Discover more';
  btnText: string = 'Logo';
  title: string = 'NASA Missions';
  bgImgUrl: any;

  constructor(private sanitizer: DomSanitizer) {
    this.bgImgUrl = this.sanitizer.bypassSecurityTrustStyle(`url('./assets/images/earth.png')`);
  }

  ngOnInit(): void {
    this.hCarouselData = [
      {
        id: 1,
        title: 'Apollo 11',
        description: 'A Walk on the Moon',
      },
      {
        id: 2,
        title: 'Freedom 7',
        description: 'The First American in Space',
      },
      {
        id: 3,
        title: 'Mars Science Lab',
        description:
          'The Mars Science Laboratory, a Rockhound on the Red Planet',
      },
      {
        id: 4,
        title: 'Apollo 8',
        description: 'A Lunar Christmas Eve',
      },
      {
        id: 5,
        title: 'The Space Shuttle',
        description: 'A Reusable Spacecraft',
      },
      {
        id: 6,
        title: 'Apollo 13',
        description: 'Brilliance at Mission Control',
      },
      {
        id: 7,
        title: 'Juno Spacecraft',
        description: 'A Trip to Jupiter',
      },
      {
        id: 8,
        title: 'Chandra X-ray Observatory',
        description: 'The High-energy Universe',
      },
      {
        id: 9,
        title: 'Hubble Space Telescope',
        description: 'the Universe Unveiled',
      },
      {
        id: 10,
        title: 'Explorer 1',
        description: 'The First U.S. Satellite',
      },
    ];
  }
}
