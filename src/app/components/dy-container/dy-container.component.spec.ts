import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyContainerComponent } from './dy-container.component';

describe('DyContainerComponent', () => {
  let component: DyContainerComponent;
  let fixture: ComponentFixture<DyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyContainerComponent]
    });
    fixture = TestBed.createComponent(DyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
