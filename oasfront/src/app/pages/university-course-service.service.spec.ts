import { TestBed } from '@angular/core/testing';

import { UniversityCourseServiceService } from './university-course-service.service';

describe('UniversityCourseServiceService', () => {
  let service: UniversityCourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityCourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
