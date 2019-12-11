import { Component, OnInit, Input } from '@angular/core';


import { Package } from '../package.model';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {
  @Input() package1: Package;
  @Input() layoutMode: boolean;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
  }


  onAddToCart(package1: Package) {
    this.packageService.addToCart(package1);
  }

}
