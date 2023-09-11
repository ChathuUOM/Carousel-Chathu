import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCarouselComponent } from './full-carousel.component';

describe('FullCarouselComponent', () => {
  let component: FullCarouselComponent;
  let fixture: ComponentFixture<FullCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
