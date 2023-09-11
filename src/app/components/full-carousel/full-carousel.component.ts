import { Component, OnInit } from '@angular/core';
import { IVCarouselItem } from 'src/app/model/v-carousel.model';

@Component({
  selector: 'conv-full-carousel',
  templateUrl: './full-carousel.component.html',
  styleUrls: ['./full-carousel.component.scss'],
})
export class FullCarouselComponent implements OnInit {
  vCarouselData: IVCarouselItem[] = [];

  constructor() {}

  isActive(item:any){
    return item === this.vCarouselData[0]; 
 }

  ngOnInit(): void {
    this.vCarouselData = [
      { id : 1, img : '', title : 'Big Buck Bunny1', description1 : 'Three rodents amuse themselves by harassing creatures of the forest.',description2 : 'However, when they mess with a bunny, he decides to teach them a lesson.' },
      // { id : 2, img : '', title : 'Big Buck Bunny2', description1 : 'description1b' },
      // { id : 3, img : '', title : 'Big Buck Bunny3', description1 : 'description1c' },
      // { id : 4, img : '', title : 'Big Buck Bunny4', description1 : 'description1d' },
    ];
  }
}
