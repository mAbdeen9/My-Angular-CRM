import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AddContactComponent } from '../add-contact/add-contact.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}

  addContact() {
    this.modal.open(AddContactComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }
}
