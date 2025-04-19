import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrademarkComponent } from './edit-trademark.component';

describe('EditTrademarkComponent', () => {
  let component: EditTrademarkComponent;
  let fixture: ComponentFixture<EditTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrademarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
