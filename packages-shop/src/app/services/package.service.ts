import {Injectable, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CurrencyGrid} from '../packages/currencygrid.model';


import { Package } from '../packages/package.model';

@Injectable()
export class PackageService {
  cartAdditionEmitter = new EventEmitter<Package[]>(); // emitted for card and single package, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emitted for price total calculation on, addition, substraction, increase or removal
  filterTypeEmitter = new EventEmitter<string>(); // emittet when filtering through product categories
  searchEmitter = new EventEmitter<string>();
  layoutModeEmitter = new EventEmitter<boolean>();

  private allPackages: Package[];
  private cartAddedPackages: Package[] = [];
  private cartTotal = 0;
  private discount = 0;
  private selectedPackage: Package;
  private filterBy = 'all';
  private search = '';
  private currentCurrency: String = 'USD';
  public currencyGrid: CurrencyGrid = new CurrencyGrid();
  private layoutMode = window.localStorage.getItem('ngShopLayout') === 'list' ? false : true;

  constructor(
    public router: Router,
    private httpClient: HttpClient,
  ) {}

  fetchPackagesFromDB(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/ecommerce/packages`)
     .map(packageSingle => {
        const adjustedFetchedPackages: any[] = [];
        for (const id in packageSingle) {
          if (packageSingle.hasOwnProperty(id)) {
            const packageToAdd = packageSingle[id];
            packageToAdd.id = id;
            adjustedFetchedPackages.push(packageToAdd);
          }
        }
        return adjustedFetchedPackages;
      });
  }

  selectCurrency(value: String): void {
      this.currentCurrency = value;
  }
  convertToCurrency(value: number): String {
    return this.currencyGrid.currencySymbols.get(this.currentCurrency) +
      (this.currencyGrid.currencyRates.get(this.currentCurrency) * value).toString();
  }

  fetchCurrencyConverter(): Observable<any> {
     // return this.httpClient.get(`http://0.0.0.0:8080/ecommerce/currency`);
    return null;

  }


  fetchSinglePackageFromDB(indexID: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/ecommerce/packages/${indexID}`)
      .map(singlePackage => {
        if (singlePackage === null) {
          this.router.navigate(['/packages']);
          throw new Error('Package not found');
        }
        const adjustedPackage = {
          ...singlePackage,
          id: indexID
        };
        return adjustedPackage;
      });
  }





  setFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.filterTypeEmitter.emit(this.filterBy);
  }
  getFilter() {
    return this.filterBy;
  }

  searchFilter(searchValue: string) {
    this.search = searchValue;
    this.searchEmitter.emit(this.search);
  }
  getSearchFilter() {
    return this.search;
  }


  setAllPackages(fetchedPackages: Package[]) {
    this.allPackages = fetchedPackages;
  }

  getAllPackages() {
    return this.allPackages.slice();
  }
  getDiscount() {
    this.calculateCartTotal();
    return this.discount;
  }

  // get max 3 similar products sorted from high price > low
  getSimilarPackages(packageId: string) {
    const SIMILAR_PACKAGES = this.getAllPackages().sort((a, b) => b.price - a.price);
    return SIMILAR_PACKAGES.filter((p) => {
      return p.id !== packageId;
    }).slice(0, 3); // get max 3 items
  }





  addToCart(package1: Package) {
    // if item is already in cart ++ its qty, don't readd it
    const added = this.cartAddedPackages.find(p => p.id === package1.id);
    if (added) {
      added.qty++;
    } else {
      package1.qty = 1;
      this.cartAddedPackages.push(package1);
    }
    this.cartAdditionEmitter.emit(this.cartAddedPackages);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
  }

  getCartAddedPackages() {
    return this.cartAddedPackages;
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartAddedPackages.forEach(element => {
      this.cartTotal += element.price * element.qty;
    });
    if (this.cartAddedPackages.length > 1) {
      this.discount = this.cartTotal * 0.1;
    } else {
      this.discount = 0;
    }
  }

  getCartTotal() {
    return this.cartTotal;
  }

  cartPackageManipulate(package1: Package, increase: boolean = false) {
    const manipulatedPackage = this.cartAddedPackages.find(mp => mp.id === package1.id);
    increase ? manipulatedPackage.qty++ : manipulatedPackage.qty--;
   /* if (manipulatedPackage) {
      increase ? manipulatedPackage.qty++ : manipulatedPackage.qty--;
    } else {

    }*/
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
  }



  removeCartSingleItem(itemIndex: number) {
    // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
    this.cartAddedPackages[itemIndex].qty = 1;

    const removedProductName = this.cartAddedPackages[itemIndex].name;
    this.cartAddedPackages.splice(itemIndex, 1);

    this.cartAdditionEmitter.emit(this.cartAddedPackages);
    this.calculateCartTotal();
    const values: number[] = [this.cartTotal, this.discount];
    this.cartTotalEmitter.emit(this.cartTotal);
  }

  emptyCart() {
    // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
    for (const cp of this.cartAddedPackages) { cp.qty = 1; }

    this.cartAddedPackages = [];
    this.cartAdditionEmitter.emit(this.cartAddedPackages);
    this.cartTotal = 0;
    const values: number[] = [this.cartTotal, this.discount];
    this.cartTotalEmitter.emit(this.cartTotal);
    this.router.navigate(['/packages']);
  }



  getLayout() {
    return this.layoutMode;
  }
  setLayout(layoutValue: boolean) {
    window.localStorage.setItem('ngShopLayout', layoutValue ? 'grid' : 'list');
    this.layoutMode = layoutValue;
    this.layoutModeEmitter.emit(this.layoutMode);
  }


}
