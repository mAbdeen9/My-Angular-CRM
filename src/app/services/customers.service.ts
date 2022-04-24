import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  bs: import('@ng-bootstrap/ng-bootstrap').NgbModalRef | undefined;

  constructor(private firestore: Firestore) {}

  CustomersRef = collection(this.firestore, 'Customers');

  addCustomer(customer: Customer) {
    return addDoc(this.CustomersRef, customer);
  }

  getCustomer(): Observable<Customer[]> {
    return collectionData(this.CustomersRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }
}
