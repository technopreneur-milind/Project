import { Component, OnInit, Input } from '@angular/core';


import { Package } from '../package.model';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-list-item',
  templateUrl: './package-list-item.component.html',
  styleUrls: ['./package-list-item.component.css']
})
export class PackageListItemComponent implements OnInit {
  @Input() package1: Package;
  @Input() layoutMode: boolean;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
  }


  onAddToCart(package1: Package) {
    this.packageService.addToCart(package1);
  }
}
