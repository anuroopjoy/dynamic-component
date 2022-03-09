import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appLoadDynamic]',
})
export class LoadDynamicDirective implements OnChanges {
  @Input() appLoadDynamic!: { component: any; inputs: any; outputs: any };

  constructor(
    private placeholder: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.placeholder.clear();
      const componentFactory = this.resolver.resolveComponentFactory(
        this.appLoadDynamic.component
      );
      console.log(componentFactory);
      const component: any = this.placeholder.createComponent(componentFactory);
      console.log(component);
      for (const key in this.appLoadDynamic.inputs) {
        component.instance[key] = this.appLoadDynamic.inputs[key];
      }
      for (const key in this.appLoadDynamic.outputs) {
        component.instance[key].subscribe(this.appLoadDynamic.outputs[key]);
      }
    }
  }
}
