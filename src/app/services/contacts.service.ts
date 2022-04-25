import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  bs: import('@ng-bootstrap/ng-bootstrap').NgbModalRef | undefined;

  constructor(private firestore: Firestore) {}

  ContactsRef = collection(this.firestore, 'Contacts');

  addContact(contact: Contact) {
    return addDoc(this.ContactsRef, contact);
  }

  getContact(): Observable<Contact[]> {
    return collectionData(this.ContactsRef, { idField: 'id' }) as Observable<
      Contact[]
    >;
  }

  deleteContact(contact: Contact) {
    let contactRef = doc(this.firestore, `Contacts/${contact.id}`);

    return deleteDoc(contactRef);
  }

  updateContact(contact: Contact) {
    let contactRef = doc(this.firestore, `Contacts/${contact.id}`);

    return setDoc(contactRef, contact);
  }

  getContactById(id: string) {
    let ContactRef = doc(this.firestore, `Contacts/${id}`);

    return docData(ContactRef, { idField: 'id' }) as Observable<Contact>;
  }
}
