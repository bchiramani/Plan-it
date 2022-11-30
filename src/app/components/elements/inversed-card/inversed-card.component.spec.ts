import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversedCardComponent } from './inversed-card.component';

describe('InversedCardComponent', () => {
  let component: InversedCardComponent;
  let fixture: ComponentFixture<InversedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
