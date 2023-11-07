import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimoTerceiroComponent } from './decimo-terceiro.component';

describe('DecimoTerceiroComponent', () => {
  let component: DecimoTerceiroComponent;
  let fixture: ComponentFixture<DecimoTerceiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecimoTerceiroComponent]
    });
    fixture = TestBed.createComponent(DecimoTerceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
