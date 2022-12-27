import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostFormComponent } from './add-post-form.component';

describe('AddPostFormComponent', () => {
  let component: AddPostFormComponent;
  let fixture: ComponentFixture<AddPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
