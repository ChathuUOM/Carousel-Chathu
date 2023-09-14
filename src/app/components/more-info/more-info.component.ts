import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationStart,
  Routes,
} from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { IHCarouselItem } from 'src/app/model/h-carousel.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'conv-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  bgImgUrl: string = 'earth.png';
  data?: IHCarouselItem;
  routes: Routes = [];
  logoUrl: string = 'assets/images/logo.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public _dataService: DataService
  ) {}

  ngOnInit(): void {
    debugger;
    this.data = this._dataService.getData();
  }
}
