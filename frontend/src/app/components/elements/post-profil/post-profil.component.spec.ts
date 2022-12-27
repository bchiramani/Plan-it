import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilComponent } from './post-profil.component';

describe('PostProfilComponent', () => {
  let component: PostProfilComponent;
  let fixture: ComponentFixture<PostProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
