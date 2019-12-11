import { Component, OnInit, OnDestroy } from '@angular/core';

import { PackageService } from '../../services/package.service';
import { Package } from '../../packages/package.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})


export class CurrencyComponent implements OnInit, OnDestroy {
  // currencies = this.packageService.currencyGrid.currencyRates.keys();
  currencies: String[] = ['USD', 'GBP', 'EUR', 'INR']
  constructor(private packageService: PackageService
  ) {
  }


  currencyChange(e) {
    this.packageService.selectCurrency(e.target.value);
    this.packageService.router.navigate([this.packageService.router.url]);
  }

  ngOnInit() {

  }



  removeCartPackages(itemIndex: number) {
    this.packageService.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.packageService.emptyCart();
  }



  ngOnDestroy() {

  }



}
