import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterBy: string;
  filterToggle: boolean;
  @ViewChild('searchInput') searchText: ElementRef;
  layoutMode: boolean; // true for grid, false for list

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.setFilterToggle();
    this.filterBy = this.packageService.getFilter();
    this.packageService.filterTypeEmitter.subscribe(
      (filverValue: string) => {
        this.filterBy = filverValue;
      }
    );
    this.layoutMode = this.packageService.getLayout();
    this.packageService.layoutModeEmitter.subscribe(
      (layoutVal: boolean) => {
        this.layoutMode = layoutVal;
      }
    );
  }




  setLayout(layoutVal: boolean) {
    this.packageService.setLayout(layoutVal);
  }

  setFilterToggle() {
    this.filterToggle = window.outerWidth > 768 ? true : false;
  }

  searchFilter() {
    this.packageService.searchFilter(this.searchText.nativeElement.value);
  }

  setFilter(filterValue: string) {
    this.packageService.setFilter(filterValue);
  }


  resetFilters() {
    this.packageService.setFilter('all');
    this.searchText.nativeElement.value = '';
    this.packageService.searchFilter('');
  }

}
