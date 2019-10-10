import { TestBed } from '@angular/core/testing';

import { NgxPanelService } from './ngx-panel.service';

describe('NgxPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPanelService = TestBed.get(NgxPanelService);
    expect(service).toBeTruthy();
  });
});
