import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  NgModuleFactory,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SharedService } from './shared.service';
import { InnerComponent } from './inner/inner.component';
import { InnerModule } from './inner/inner.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'main component';

  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public placeholder!: ViewContainerRef;
  public DynamicComponent = DynamicComponent;
  // public DynamicComponent = InnerComponent;
  public customInjector!: Injector;
  @ViewChild('content1', { static: true })
  public content1!: ElementRef;
  @ViewChild('content2', { static: true })
  public content2!: ElementRef;
  public contentList: any[][] = [];
  // public customModuleFactory!: NgModuleFactory<InnerModule>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector
  ) {
    this.customInjector = Injector.create({
      providers: [
        { provide: SharedService, useClass: SharedService, deps: [] },
      ],
      parent: this.injector,
    });
  }

  async ngOnInit() {
    // this.customModuleFactory = this.compiler.compileModuleSync(InnerModule);
    const sharedService = this.customInjector.get(SharedService);
    sharedService.description = 'dynamic component';
    sharedService.clicked.subscribe(() => {
      console.log('click occurred');
    });
    this.contentList.push([this.content1.nativeElement]);
    this.contentList.push([this.content2.nativeElement]);
    // this.placeholder.clear();
    // const componentFactory =
    //   this.resolver.resolveComponentFactory(DynamicComponent);
    // console.log(componentFactory);
    // const component = this.placeholder.createComponent(componentFactory);
    // console.log(component);
    // component.instance.description = 'dynamic component'
    // component.instance.clicked.subscribe(() => {
    //   console.log('click occurred');
    // });
    // this.placeholder.detach();
    // const componentFactory =
    //   this.resolver.resolveComponentFactory(DynamicComponent);
    // console.log(componentFactory);
    // const component = componentFactory.create(this.injector);
    // console.log(component);
    // component.instance.description = 'dynamic component';
    // component.instance.clicked.subscribe(() => {
    //   console.log('click occurred');
    // });
    // this.placeholder.insert(component.hostView);
  }
  ngAfterViewInit(): void {}
}
