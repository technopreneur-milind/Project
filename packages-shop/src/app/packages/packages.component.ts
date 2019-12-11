import { Component, OnInit, OnDestroy } from '@angular/core';

import { Package } from './package.model';
// import { Product } from './product.model';
import { PackageService } from '../services/package.service';
import {NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit, OnDestroy {
  packages: Package[];
  filterBy: string;
  searchText: string;
  layoutMode: boolean; // true for grid, false for list
  isLoading = true;
  mySubscription: any;


  constructor( private packagesService: PackageService
  ) {
    this.packagesService.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.packagesService.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.packagesService.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.packagesService.fetchPackagesFromDB().subscribe(
      packages => {
        this.packagesService.setAllPackages(packages);
        this.packages = this.packagesService.getAllPackages();
      },
      err => console.log(err),
      () => this.isLoading = false
    );

    /*this.packagesService.fetchCurrencyConverter().subscribe(
        currencyGrid => {
          this.packagesService.currencyGrid = currencyGrid;
        },
        err => console.log(err),
        () => this.isLoading = false
    );
*/


    this.filterBy = this.packagesService.getFilter();
    this.searchText = this.packagesService.getSearchFilter();
    this.layoutMode = this.packagesService.getLayout();

    this.packagesService.filterTypeEmitter.subscribe(
      (filterValue: string) => {
        this.filterBy = filterValue;
      }
    );
    this.packagesService.searchEmitter.subscribe(
      (searchValue: string) => {
        this.searchText = searchValue;
      }
    );
    this.packagesService.layoutModeEmitter.subscribe(
      (layoutVal: boolean) => {
        this.layoutMode = layoutVal;
      }
    );
  }

  ngOnDestroy() {
    this.packages = [];
  }

}
