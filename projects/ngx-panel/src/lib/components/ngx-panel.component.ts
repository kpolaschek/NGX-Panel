import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgxPanelService } from '../services/ngx-panel.service';
import { NgxPanelOptions } from '../interfaces/ngx-panel-options.interface';

@Component({
  selector: 'ngx-panel',
  templateUrl: './ngx-panel.component.html',
  styleUrls: ['./ngx-panel.component.css']
})
export class NgxPanelComponent implements OnInit, AfterViewInit {
  id: string;
  options: NgxPanelOptions;

  @Input('title') title: string;

  constructor(private service: NgxPanelService) {
  }

  ngOnInit(): void {
    this.id = 'ngxPanelContent-' + this.service.getNextId();
    this.options = this.service.getDefaultOptions();
  }

  ngAfterViewInit(): void {
    const element = document.getElementById(this.id);

    this.options.headerTitle = this.title;
    // this.options.container = element.parentElement;
    this.options.content = panel => {
      panel.content.append(element);
    };


    this.service.createPanel(this.options);
  }
}
