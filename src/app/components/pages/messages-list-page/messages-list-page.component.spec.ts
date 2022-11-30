import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesListPageComponent } from './messages-list-page.component';

describe('MessagesListPageComponent', () => {
  let component: MessagesListPageComponent;
  let fixture: ComponentFixture<MessagesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
