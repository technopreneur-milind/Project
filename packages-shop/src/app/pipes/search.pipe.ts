import { Pipe, PipeTransform } from '@angular/core';

import {Package} from '../packages/package.model';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(packages: Package[], searchText: string): any[] {
    if (!packages) { return []; }
    if (!searchText) { return packages; }
    searchText = searchText.toLowerCase();
    return packages.filter(it => {
      // searches based on name || description
      return it.name.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
    });
  }
}
