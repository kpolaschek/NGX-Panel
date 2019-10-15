import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FirstPanelComponent} from './first-panel/first-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGX-Panel test application';
  componentRefs: ComponentRef<FirstPanelComponent>[] = [];
  htmlCode = `<ngx-panel [headerTitle]="title" [position]="position" [borderRadius]="radius">
  <form>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
      <small class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" >
      <label class="form-check-label" >Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</ngx-panel>`;

  @ViewChild('panelContainer', { static: false, read: ViewContainerRef }) panelContainer;

  constructor(private resolver: ComponentFactoryResolver) {}

  createPanel() {
    const factory: ComponentFactory<FirstPanelComponent> = this.resolver.resolveComponentFactory(FirstPanelComponent);
    this.componentRefs.push(this.panelContainer.createComponent(factory));
  }

  changeTitle() {
    for (const componentRef of this.componentRefs) {
      componentRef.instance.title = 'Title with random number ' + Math.floor(Math.random() * Math.floor(99));
    }
  }

  changePosition() {
    for (const componentRef of this.componentRefs) {
      const x: number = Math.floor(Math.random() * Math.floor(window.innerWidth));
      const y: number = Math.floor(Math.random() * Math.floor(window.innerHeight));
      componentRef.instance.position = 'left-top ' + x + ' ' + y;
    }
  }

  changeRadius() {
    for (const componentRef of this.componentRefs) {
      const x: number = Math.floor(Math.random() * Math.floor(3));
      const y: number = Math.floor(Math.random() * Math.floor(3));
      componentRef.instance.radius = x + 'em ' + y + 'em';
    }
  }
}
