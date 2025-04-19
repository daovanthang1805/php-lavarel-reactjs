import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeadminComponent } from './employeeadmin.component';

describe('EmployeeadminComponent', () => {
  let component: EmployeeadminComponent;
  let fixture: ComponentFixture<EmployeeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
