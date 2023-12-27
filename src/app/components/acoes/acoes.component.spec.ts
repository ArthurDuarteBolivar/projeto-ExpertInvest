import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesComponent } from './acoes.component';

describe('AcoesComponent', () => {
  let component: AcoesComponent;
  let fixture: ComponentFixture<AcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcoesComponent]
    });
    fixture = TestBed.createComponent(AcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
