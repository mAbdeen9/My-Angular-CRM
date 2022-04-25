import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  contact: Contact = {
    name: '',
    phone: '',
    email: '',
  };
  constructor(private custs: ContactsService, private modal: NgbModal) {}

  ngOnInit(): void {}

  submitAddcust() {
    if (
      this.contact.email == '' ||
      this.contact.name == '' ||
      this.contact.phone == ''
    )
      return;
    this.custs.addContact(this.contact).then(() => {
      this.reset();
      this.custs.bs?.close();
    });
  }

  reset() {
    this.contact = { name: '', phone: '', email: '' };
  }
}
