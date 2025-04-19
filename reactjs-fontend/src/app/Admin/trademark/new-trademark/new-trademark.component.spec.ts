import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrademarkComponent } from './new-trademark.component';

describe('NewTrademarkComponent', () => {
  let component: NewTrademarkComponent;
  let fixture: ComponentFixture<NewTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrademarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
