import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}

  addCustomer() {
    this.modal.open(AddCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }
}
