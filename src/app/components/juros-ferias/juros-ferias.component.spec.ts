import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosFeriasComponent } from './juros-ferias.component';

describe('JurosFeriasComponent', () => {
  let component: JurosFeriasComponent;
  let fixture: ComponentFixture<JurosFeriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JurosFeriasComponent]
    });
    fixture = TestBed.createComponent(JurosFeriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
