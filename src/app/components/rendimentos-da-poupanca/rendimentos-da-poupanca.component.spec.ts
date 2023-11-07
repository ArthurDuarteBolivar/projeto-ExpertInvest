import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimentosDaPoupancaComponent } from './rendimentos-da-poupanca.component';

describe('RendimentosDaPoupancaComponent', () => {
  let component: RendimentosDaPoupancaComponent;
  let fixture: ComponentFixture<RendimentosDaPoupancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendimentosDaPoupancaComponent]
    });
    fixture = TestBed.createComponent(RendimentosDaPoupancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
