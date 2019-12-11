import {Product} from './product.model';

export class Package {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public qty: number,
    public image: string,
    public products: Product[]
  ) { }
}
