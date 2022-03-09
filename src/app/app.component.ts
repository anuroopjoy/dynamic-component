import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main component';
  dynamicInput = {
    component: DynamicComponent,
    inputs: {
      description: 'dynamic component',
    },
    outputs: {
      clicked: this.handleClick.bind(this),
    },
  };

  constructor() {}

  handleClick() {
    console.log('click occurred');
  }
}
