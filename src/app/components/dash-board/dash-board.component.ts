import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { Customer } from 'src/app/interfaces/customer';
import { ContactsService } from 'src/app/services/contacts.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  contacts: any[] = [];
  customers: any[] = [];

  constructor(
    private contactSer: ContactsService,
    private customerSer: CustomersService
  ) {}

  ngOnInit(): void {
    this.customerSer.getCustomer().subscribe((customers: Customer[]) => {
      this.customers = customers.splice(0, 5);
    });

    this.contactSer.getContact().subscribe((contacts: Contact[]) => {
      this.contacts = contacts.splice(0, 5);
    });
  }
}
