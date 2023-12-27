import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfoIndiceComponent } from './top-info-indice.component';

describe('TopInfoIndiceComponent', () => {
  let component: TopInfoIndiceComponent;
  let fixture: ComponentFixture<TopInfoIndiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopInfoIndiceComponent]
    });
    fixture = TestBed.createComponent(TopInfoIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
