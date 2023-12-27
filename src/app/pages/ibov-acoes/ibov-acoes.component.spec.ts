import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbovAcoesComponent } from './ibov-acoes.component';

describe('IbovAcoesComponent', () => {
  let component: IbovAcoesComponent;
  let fixture: ComponentFixture<IbovAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbovAcoesComponent]
    });
    fixture = TestBed.createComponent(IbovAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
