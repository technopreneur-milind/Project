import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

import { PackageService } from '../../services/package.service';
import { Package } from '../../packages/package.model';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cartmini',
  templateUrl: './cartmini.component.html',
  styleUrls: ['./cartmini.component.css']
})


export class CartminiComponent implements OnInit, OnDestroy, OnChanges {
  cartminiPackages: Package[];
  cartminiTotal: number;
  cartAdditionSubscription: Subscription;
  cartTotalSubscription: Subscription;
  currencyEventSubscription: Subscription;

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.cartminiPackages = this.packageService.getCartAddedPackages();
    this.cartAdditionSubscription = this.packageService.cartAdditionEmitter.subscribe(
      (packages: Package[]) => {
        this.cartminiPackages = packages;
      }
    );
    this.cartminiTotal = this.packageService.getCartTotal();
    this.cartTotalSubscription = this.packageService.cartTotalEmitter.subscribe(
      (cTotal: number) => {
        this.cartminiTotal = cTotal;
      }
    );
  }

  getTotalPostDiscount(): number {
    const discount = this.packageService.getDiscount();
    return discount == null ? this.cartminiTotal : this.cartminiTotal - discount;
  }
  getDiscount(): number {
    const discount = this.packageService.getDiscount();
    return discount == null ? 0 : discount;
  }

  getConvertedValue(value: number): String {
    return this.packageService.convertToCurrency(value);
  }

  removeCartPackages(itemIndex: number) {
    this.packageService.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.packageService.emptyCart();
  }



  ngOnDestroy() {
    this.cartAdditionSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }



}
