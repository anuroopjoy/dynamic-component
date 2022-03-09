import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';
import { TestDirective } from './test.directive';
import { LoadDynamicDirective } from './load-dynamic.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    InnerComponent,
    LoadDynamicDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
