import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { DraftedItenarariesComponent } from './drafted-itenararies/drafted-itenararies.component';
import { GridViewComponent } from './grid-view/grid-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchBarComponent,
    QuickAccessComponent,
    DraftedItenarariesComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
