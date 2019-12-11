import { Component, OnInit, OnDestroy } from '@angular/core';
import { Package } from '../packages/package.model';
import { PackageService } from '../services/package.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartPackages: Package[];
  cartTotal: number;
  cartAdditionSubscription: Subscription;
  cartTotalSubscription: Subscription;

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.cartPackages = this.packageService.getCartAddedPackages();
    this.cartAdditionSubscription = this.packageService.cartAdditionEmitter.subscribe(
      (packages: Package[]) => {
        this.cartPackages = packages;
      }
    );

    this.cartTotal = this.packageService.getCartTotal();
    this.cartTotalSubscription = this.packageService.cartTotalEmitter.subscribe(
      (cTotal: number) => {
        this.cartTotal = cTotal;
      }
    );
  }

  getTotalPostDiscount(): number {
    const discount = this.packageService.getDiscount();
    return discount == null ? this.cartTotal : this.cartTotal - discount;
  }
  getDiscount(): number {
    const discount = this.packageService.getDiscount();
    return discount == null ? 0 : discount;
  }


  onValAdd(package1: Package) {
    this.packageService.cartPackageManipulate(package1, true);
  }
  onValSub(package1: Package) {
    this.packageService.cartPackageManipulate(package1);
  }


  removeCartPackage(itemIndex: number) {
    this.packageService.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.packageService.emptyCart();
  }

  onCheckout() {
    alert(JSON.stringify(this.cartPackages) + '\n\n\n' + 'Total: ' + this.cartTotal);
  }


  ngOnDestroy() {
    this.cartAdditionSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }

}
