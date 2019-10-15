import { Injectable, SimpleChanges } from '@angular/core';
import { jsPanel } from 'jspanel4';
import { NgxPanelOptions } from '../interfaces/ngx-panel-options.interface';
import { NgxPanel } from '../interfaces/ngx-panel.interface';

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
    return {};
  }

  createPanel(options: NgxPanelOptions): NgxPanel {
    const panel = jsPanel.create(options);
    console.log('NGX-Panel created: ' + panel.id);
    return panel;
  }

  changePanel(panel: NgxPanel, changes: SimpleChanges): void {
    if (changes.title) {
      panel.setHeaderTitle(changes.title.currentValue);
    }
    if (changes.position) {
      panel.reposition(changes.position.currentValue);
    }
  }
}
