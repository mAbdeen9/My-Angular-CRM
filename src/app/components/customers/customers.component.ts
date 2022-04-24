import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/interfaces/customer';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  customers: Customer[] = [];
  constructor(private modal: NgbModal, private customerSer: CustomersService) {}

  ngOnInit(): void {
    this.customerSer.getCustomer().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  addCustomer() {
    let boxWindow = this.modal.open(AddCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    this.customerSer.bs = boxWindow;
  }
}
