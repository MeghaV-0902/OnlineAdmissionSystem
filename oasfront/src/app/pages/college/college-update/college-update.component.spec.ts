import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeUpdateComponent } from './college-update.component';

describe('CollegeUpdateComponent', () => {
  let component: CollegeUpdateComponent;
  let fixture: ComponentFixture<CollegeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
