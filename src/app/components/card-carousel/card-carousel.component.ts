import { Component, OnInit } from '@angular/core';

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
  bgImgUrl: string = 'earth.png';

  constructor(private sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
    this.hCarouselData = [
      {
        id: 1,
        title: 'Apollo 11',
        description:
          'A Walk on the Moon, Apollo 11 was the first mission to actually land men on the moon.',
      },
      {
        id: 2,
        title: 'Freedom 7',
        description:
          'The First American in Space; The first American astronaut to orbit the Earth was Alan Shepard, and he left Earth on May 5, 1961. He was not the first human in space; a Soviet astronaut named Yuri Gagarin has that distinction.',
      },
      {
        id: 3,
        title: 'Mars Science Lab',
        description: 'A Rockhound on the Red Planet',
      },
      {
        id: 4,
        title: 'Apollo 8',
        description:
          'A Lunar Christmas Eve; Astronauts Frank Borman, James A. Lovell, and William Anders — who would been preparing themselves for a very different kind of mission — were assigned to this endeavor. ',
      },
      {
        id: 5,
        title: 'The Space Shuttle',
        description:
          'A Reusable Spacecraft: It took nine years from the start of the project to the first flight. In 1981, the Space Shuttle Columbia lifted off and its maiden mission was successful.',
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
        description:
          'The High-energy Universe: X-ray telescopes are different than the more commonplace optical telescopes we are all familiar with.',
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
