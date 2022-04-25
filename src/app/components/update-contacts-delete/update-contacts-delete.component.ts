import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-update-contacts-delete',
  templateUrl: './update-contacts-delete.component.html',
  styleUrls: ['./update-contacts-delete.component.css'],
})
export class UpdateContactsDeleteComponent implements OnInit {
  contact: Contact = {
    name: '',
    phone: '',
    email: '',
  };
  @Input() id?: string;

  constructor(
    private bs: ContactsService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.bs.getContactById(this.id!).subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }

  updateCustomer() {
    this.bs.updateContact(this.contact).then(() => {
      this.activeModal.close();
      alert('Contact Updated successfully!');
    });
  }

  deleteCustomer(contact: Contact) {
    if (confirm('Are you sure?') == true) {
      this.bs.deleteContact(contact).then(() => this.activeModal.close());
    }
  }
}
