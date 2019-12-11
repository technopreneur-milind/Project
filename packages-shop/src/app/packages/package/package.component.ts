import { Component, OnInit, DoCheck } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Package } from '../package.model';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
// export class ProductComponent implements OnInit, DoCheck {
export class PackageComponent implements OnInit {
  id: string;
  package1: Package;
  similarPackages: Package[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    this.initProductSingleView();
  }


  // ngDoCheck() {
  //   this.initProductSingleView();
  // }

  // helper fn to save repeating same code in init and doCheck hooks
  initProductSingleView() {
    this.id = this.route.snapshot.params['id'];
    this.packageService.fetchSinglePackageFromDB(this.id).subscribe(
      package1 => {
        this.package1 = package1;
        // this.getSimilarProducts(this.product.type, this.product.id);
      },
      err => console.error(err),
      () => this.isLoading = false
    );
  }


  addToCart(package1: Package) {
    this.packageService.addToCart(package1);
  }


  // getSimilarProducts(prodType: string, prodId: string) {
  //   this.similarProducts = this.prodService.getSimilarProducts(prodType, prodId);
  // }

}
