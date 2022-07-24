import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCourseListComponent } from './university-course-list.component';

describe('UniversityCourseListComponent', () => {
  let component: UniversityCourseListComponent;
  let fixture: ComponentFixture<UniversityCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
