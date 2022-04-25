import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = {
    name: '',
    phone: '',
    email: '',
    status: '',
  };

  constructor(private custs: CustomersService, private modal: NgbModal) {}

  ngOnInit(): void {}

  submitAddcust() {
    if (
      this.customer.email == '' ||
      this.customer.name == '' ||
      this.customer.phone == '' ||
      this.customer.status == ''
    )
      return;
    this.custs.addCustomer(this.customer).then(() => {
      this.reset();
      this.custs.bs?.close();
    });
  }

  reset() {
    this.customer = { name: '', phone: '', email: '', status: '' };
  }
}
