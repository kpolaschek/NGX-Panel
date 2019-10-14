import { Injectable } from '@angular/core';
import { jsPanel } from 'jspanel4';
import { NgxPanelOptions } from '../interfaces/ngx-panel-options.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxPanelService {

  constructor() {
  }

  getNextId(): number {
    return jsPanel.idCounter + 1;
  }

  getDefaultOptions(): NgxPanelOptions {
    return {
      // container: 'app-root',
      // position: 'left-top 0 0'
    };
  }

  createPanel(options: NgxPanelOptions): void {
    const panel = jsPanel.create(options);
    console.log('NGX-Panel created: ' + panel.id);
  }
}
