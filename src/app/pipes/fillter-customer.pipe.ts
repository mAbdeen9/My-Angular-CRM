import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'fillterCustomer',
})
export class FillterCustomerPipe implements PipeTransform {
  transform(
    products: Customer[] | null,
    propName: keyof Customer,
    value: string
  ): Customer[] | null {
    if (!products) return null;
    return products.filter((pro) => {
      return pro[propName]?.toLowerCase().includes(value.toLowerCase());
    });
  }
}
