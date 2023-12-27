import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfoComponent } from './top-info.component';

describe('TopInfoComponent', () => {
  let component: TopInfoComponent;
  let fixture: ComponentFixture<TopInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopInfoComponent]
    });
    fixture = TestBed.createComponent(TopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
