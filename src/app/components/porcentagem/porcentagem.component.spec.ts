import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentagemComponent } from './porcentagem.component';

describe('PorcentagemComponent', () => {
  let component: PorcentagemComponent;
  let fixture: ComponentFixture<PorcentagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorcentagemComponent]
    });
    fixture = TestBed.createComponent(PorcentagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
