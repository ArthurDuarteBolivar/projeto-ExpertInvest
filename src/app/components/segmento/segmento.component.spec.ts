import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoComponent } from './segmento.component';

describe('SegmentoComponent', () => {
  let component: SegmentoComponent;
  let fixture: ComponentFixture<SegmentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentoComponent]
    });
    fixture = TestBed.createComponent(SegmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
