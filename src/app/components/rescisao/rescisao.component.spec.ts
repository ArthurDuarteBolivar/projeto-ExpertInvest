import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescisaoComponent } from './rescisao.component';

describe('RescisaoComponent', () => {
  let component: RescisaoComponent;
  let fixture: ComponentFixture<RescisaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescisaoComponent]
    });
    fixture = TestBed.createComponent(RescisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
