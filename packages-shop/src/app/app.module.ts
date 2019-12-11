import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageCardComponent } from './packages/package-card/package-card.component';
import { CartminiComponent } from './cart/cartmini/cartmini.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PackageComponent } from './packages/package/package.component';
import { PackageService } from './services/package.service';
import { CartComponent } from './cart/cart.component';
import { NumberInputComponent } from './shared/number-input/number-input.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FiltersComponent } from './packages/filters/filters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CurrencyconvertPipe } from './pipes/currencyconvert.pipe';
import { PackageListItemComponent } from './packages/package-list-item/package-list-item.component';
import {CurrencyGrid} from './packages/currencygrid.model';
import {CurrencyComponent} from './cart/currency/currency.component'


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'packages/:id', component: PackageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'cart', component: CartComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageComponent,
    PackageCardComponent,
    CurrencyComponent,
    CartminiComponent,
    ContactComponent,
    HomeComponent,
    CartComponent,
    AboutusComponent,
    NumberInputComponent,
    TruncatePipe,
    FiltersComponent,
    FilterPipe,
    SearchPipe,
    CurrencyconvertPipe,
    PackageListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastyModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PackageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
