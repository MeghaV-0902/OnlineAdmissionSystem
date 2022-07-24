import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCourseListComponent } from './college-course-list.component';

describe('CollegeCourseListComponent', () => {
  let component: CollegeCourseListComponent;
  let fixture: ComponentFixture<CollegeCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
