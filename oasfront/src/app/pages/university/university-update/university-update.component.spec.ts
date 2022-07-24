import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityUpdateComponent } from './university-update.component';

describe('UniversityUpdateComponent', () => {
  let component: UniversityUpdateComponent;
  let fixture: ComponentFixture<UniversityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
