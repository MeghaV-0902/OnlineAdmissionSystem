import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCourseComponent } from './college-course.component';

describe('CollegeCourseComponent', () => {
  let component: CollegeCourseComponent;
  let fixture: ComponentFixture<CollegeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
