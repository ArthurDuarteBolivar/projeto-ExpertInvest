import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoAcoesComponent } from './investimento-acoes.component';

describe('InvestimentoAcoesComponent', () => {
  let component: InvestimentoAcoesComponent;
  let fixture: ComponentFixture<InvestimentoAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestimentoAcoesComponent]
    });
    fixture = TestBed.createComponent(InvestimentoAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
