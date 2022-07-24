import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeListComponent } from './college-list.component';

describe('CollegeListComponent', () => {
  let component: CollegeListComponent;
  let fixture: ComponentFixture<CollegeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
