import { Component, OnInit } from '@angular/core';
import { IVCarouselItem } from 'src/app/model/v-carousel.model';

@Component({
  selector: 'conv-full-carousel',
  templateUrl: './full-carousel.component.html',
  styleUrls: ['./full-carousel.component.scss'],
})
export class FullCarouselComponent implements OnInit {
  vCarouselData: IVCarouselItem[] = [];
  btnText: string = 'Logo';
  activeSlideIndex: any;

  constructor() {}

  isActive(item: any) {
    return item === this.vCarouselData[0];
  }

  ngOnInit(): void {
    this.vCarouselData = [
      {
        id: 1,
        img: '',
        title: 'Big Buck Bunny',
        description1: 'Three rodents harassing creatures of the forest.',
        description2: 'Start to mess with a bunny',
      },
      {
        id: 2,
        img: '',
        title: 'Project Peach',
        description1: 'Code-named "Project Peach"',
        description2: 'Short computer-animated comedy film.',
      },
      {
        id: 3,
        img: '',
        title: 'Blender Foundation',
        description1: 'Made by the Blender Institute',
      },
      {
        id: 4,
        img: '',
        title: 'Big Buck Bunny',
        description1: 'Featuring animals of the forest',
      },
    ];
  }

  onMouseWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaY);
    debugger;
    if (delta === 1) {
      // Scroll down
      this.activeSlideIndex =
        (this.activeSlideIndex + 1) % this.vCarouselData.length;
    } else if (delta === -1) {
      // Scroll up
      this.activeSlideIndex =
        (this.activeSlideIndex - 1 + this.vCarouselData.length) %
        this.vCarouselData.length;
    }
  }
}
