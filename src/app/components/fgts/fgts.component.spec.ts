import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgtsComponent } from './fgts.component';

describe('FgtsComponent', () => {
  let component: FgtsComponent;
  let fixture: ComponentFixture<FgtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FgtsComponent]
    });
    fixture = TestBed.createComponent(FgtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
