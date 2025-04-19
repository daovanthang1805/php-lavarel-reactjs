import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhcongComponent } from './thanhcong.component';

describe('ThanhcongComponent', () => {
  let component: ThanhcongComponent;
  let fixture: ComponentFixture<ThanhcongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhcongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
