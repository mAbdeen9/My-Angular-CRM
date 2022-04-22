import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: User = { email: '', password: '' };

  @ViewChild('msg')
  msg!: ElementRef;

  constructor(
    private as: AuthService,
    private router: Router,
    private modal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  register() {
    this.as
      .register(this.user)
      .then(() => {
        this.modal.close();
        localStorage.setItem(
          '/z!/!@',
          JSON.stringify(this.user.email?.split('@')[0])
        );
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        if (
          err == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'
        ) {
          this.msg.nativeElement.innerHTML = 'email already in use';
        }
        if (
          err ==
          'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).'
        ) {
          this.msg.nativeElement.innerHTML = 'weak password !';
        } else {
          this.msg.nativeElement.innerHTML = 'invalid username or password !';
        }
      });
  }
}
