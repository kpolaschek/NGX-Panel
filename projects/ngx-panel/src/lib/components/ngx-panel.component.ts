import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxPanelService } from '../services/ngx-panel.service';
import { NgxPanelOptions } from '../interfaces/ngx-panel-options.interface';
import { NgxPanel } from '../interfaces/ngx-panel.interface';

@Component({
  selector: 'ngx-panel',
  templateUrl: './ngx-panel.component.html',
  styleUrls: ['./ngx-panel.component.css']
})
export class NgxPanelComponent implements OnInit, AfterViewInit, OnChanges {
  id: string;
  options: NgxPanelOptions;
  panel: NgxPanel;

  @Input('title') title: string;
  @Input('position') position: string;

  constructor(private service: NgxPanelService) {
  }

  ngOnInit(): void {
    this.id = 'ngxPanelContent-' + this.service.getNextId();
    this.options = this.service.getDefaultOptions();
  }

  ngAfterViewInit(): void {
    const element = document.getElementById(this.id);

    this.options.headerTitle = this.title;
    this.options.position = this.position;
    this.options.content = panel => {
      panel.content.append(element);
    };

    this.panel = this.service.createPanel(this.options);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.panel) {
      this.service.changePanel(this.panel, changes);
    }
  }
}
