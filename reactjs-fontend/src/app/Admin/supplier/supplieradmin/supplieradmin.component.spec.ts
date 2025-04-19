import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieradminComponent } from './supplieradmin.component';

describe('SupplieradminComponent', () => {
  let component: SupplieradminComponent;
  let fixture: ComponentFixture<SupplieradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplieradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplieradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
