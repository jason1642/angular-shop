import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchInputService } from './views/home-page/services/search-input.service';
import { ButtonComponent } from './components/button/button.component';
import { SearchResultsDisplayComponent } from './components/search-results-display/search-results-display.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CartComponent } from './views/cart/cart.component';
import { OptionsNavComponent } from './components/options-nav/options-nav.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    ButtonComponent,
    SearchResultsDisplayComponent,
    HomePageComponent,
    CartComponent,
    OptionsNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SearchInputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 