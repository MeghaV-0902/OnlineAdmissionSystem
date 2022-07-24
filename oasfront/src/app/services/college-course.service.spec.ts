import { TestBed } from '@angular/core/testing';

import { CollegeCourseService } from './college-course.service';

describe('CollegeCourseService', () => {
  let service: CollegeCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
