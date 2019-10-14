import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPanelComponent } from './first-panel.component';

describe('FirstPanelComponent', () => {
  let component: FirstPanelComponent;
  let fixture: ComponentFixture<FirstPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
