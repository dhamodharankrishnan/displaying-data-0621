import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
// import { ItemDetailComponent } from './item-detail/item-detail.component';
// import { ItemListComponent } from './item-list/item-list.component';
// import { StringInitComponent } from './string-init/string-init.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemListComponent,
    // ItemDetailComponent,
    // ItemListComponent,
    // StringInitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/