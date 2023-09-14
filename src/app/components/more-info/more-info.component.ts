import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Routes } from '@angular/router';
import { map, filter} from 'rxjs/operators';
import { Location } from '@angular/common';
import { IHCarouselItem } from 'src/app/model/h-carousel.model';

@Component({
  selector: 'conv-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  bgImgUrl: string = 'earth.png';
  hCarouselDataItem: any;
  routes: Routes = [];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
   
  }
}
