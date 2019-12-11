import { Pipe, PipeTransform } from '@angular/core';
import { PackageService } from '../services/package.service';

@Pipe({
  name: 'currencyconvert'
})
export class CurrencyconvertPipe implements PipeTransform {

  constructor(private packageService: PackageService) {}
  transform(value: number): String {
    return this.packageService.convertToCurrency(value);
  }

}
