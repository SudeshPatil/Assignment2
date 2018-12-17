import { Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory } from '@angular/core';

  import { MessageComponent } from './message.component'
  import { BasicComponent } from './basic.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  componentRef: any;

  /* We can access template as the ViewChild inside the 
   Component class. Template is a container in which, we want to load
   the component dynamically.*/

   /* ViewContainerRef represents container where one or more view 
   can be attached */

  @ViewChild('basiccontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }
    

    createComponent(message) {
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(MessageComponent);
      const componentRef = this.entry.createComponent(factory);
      componentRef.instance.message = message;
    }

    createComponent1(basic) {
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(BasicComponent);
      const componentRef = this.entry.createComponent(factory);
      componentRef.instance.basic = basic;
    }

    destroyComponent() {
      this.componentRef.destroy();
    }
  
}
