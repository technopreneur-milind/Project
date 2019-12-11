import { Pipe, PipeTransform } from '@angular/core';
import {Package} from '../packages/package.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(packages: Package[], type: string): any {
    if (type === 'all') {
      return packages;
    } else {
      type = type.toLowerCase();
      return packages.filter(it => {
        // filters based on name || description
        return it.name.toLowerCase().includes(type) || it.description.toLowerCase().includes(type);
      });
    }
  }
}







