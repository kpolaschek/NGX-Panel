import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPanelComponent } from './ngx-panel.component';

describe('NgxPanelComponent', () => {
  let component: NgxPanelComponent;
  let fixture: ComponentFixture<NgxPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
