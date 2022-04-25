import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';
import { UpdateContactsDeleteComponent } from '../update-contacts-delete/update-contacts-delete.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  contacts: any[] = [];
  name: string = '';
  phone: string = '';
  email: string = '';
  constructor(private modal: NgbModal, private contactSer: ContactsService) {}

  ngOnInit(): void {
    this.contactSer.getContact().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  addContact() {
    let boxWindow = this.modal.open(AddContactComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    this.contactSer.bs = boxWindow;
  }

  updateContact(contact: any) {
    let modalRef = this.modal.open(UpdateContactsDeleteComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    modalRef.componentInstance.id = contact.id;
  }
}
