import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosSimplesComponent } from './juros-simples.component';

describe('JurosSimplesComponent', () => {
  let component: JurosSimplesComponent;
  let fixture: ComponentFixture<JurosSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JurosSimplesComponent]
    });
    fixture = TestBed.createComponent(JurosSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
