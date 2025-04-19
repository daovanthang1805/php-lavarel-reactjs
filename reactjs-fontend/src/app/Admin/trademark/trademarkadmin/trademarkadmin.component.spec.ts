import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkadminComponent } from './trademarkadmin.component';

describe('TrademarkadminComponent', () => {
  let component: TrademarkadminComponent;
  let fixture: ComponentFixture<TrademarkadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrademarkadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
