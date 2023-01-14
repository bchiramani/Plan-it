import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfileComponent } from './post-profile.component';

describe('PostProfileComponent', () => {
  let component: PostProfileComponent;
  let fixture: ComponentFixture<PostProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
