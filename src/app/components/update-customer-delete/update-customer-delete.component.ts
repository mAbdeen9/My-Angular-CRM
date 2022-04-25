import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-update-customer-delete',
  templateUrl: './update-customer-delete.component.html',
  styleUrls: ['./update-customer-delete.component.css'],
})
export class UpdateCustomerDeleteComponent implements OnInit {
  customer: Customer = {
    name: '',
    phone: '',
    email: '',
    status: '',
  };
  @Input() id?: string;

  constructor(
    private bs: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.bs.getCustomerById(this.id!).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }

  updateCustomer() {
    this.bs.updateCustomer(this.customer).then(() => {
      this.activeModal.close();
      alert('customer Updated successfully!');
    });
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure?') == true) {
      this.bs.deleteCustomer(customer).then(() => this.activeModal.close());
    }
  }
}
