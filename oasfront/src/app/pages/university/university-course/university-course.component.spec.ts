import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCourseComponent } from './university-course.component';

describe('UniversityCourseComponent', () => {
  let component: UniversityCourseComponent;
  let fixture: ComponentFixture<UniversityCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
