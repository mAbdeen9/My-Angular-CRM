import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  isLoggedIn: boolean = false;

  @ViewChild('check')
  check!: ElementRef;
  @ViewChild('checkPass')
  checkPass!: ElementRef;
  @ViewChild('input-l')
  inputl!: ElementRef;
  @ViewChild('errorMsg')
  errorMsg!: ElementRef;

  constructor(
    private authFire: AuthService,
    private router: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.checkLocalHistory();
  }

  checkLocalHistory() {
    if (localStorage.getItem('/z!/!@')) {
      this.router.navigateByUrl('/messageFromServer');
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 3000);
    }
  }

  validateEmail(emailAdress: string) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  onCheck() {
    this.check.nativeElement.style.display = 'none';
  }

  onCheckPass() {
    this.checkPass.nativeElement.style.display = 'none';
  }

  async login() {
    if (!this.validateEmail(this.user.email)) {
      this.check.nativeElement.style.display = 'block';
      return;
    }
    if (this.user.password.length < 6) {
      this.checkPass.nativeElement.style.display = 'block';
      return;
    }
    try {
      let userD = await this.authFire.login(this.user);
      this.router.navigateByUrl('/home');
      this.user = { email: '', password: '' };
      localStorage.setItem(
        '/z!/!@',
        JSON.stringify(userD.user.email?.split('@')[0])
      );
    } catch (err) {
      console.log(err);
      this.check.nativeElement.style.display = 'none';
      this.checkPass.nativeElement.style.display = 'none';
      this.errorMsg.nativeElement.style.display = 'block';
    }
  }

  async loginGmail() {
    try {
      let userD = await this.authFire.loginWithGoogle();
      localStorage.setItem('/z!/!@', JSON.stringify(userD.user.displayName));
      this.router.navigateByUrl('/home');
    } catch (err) {
      console.log(err);
      alert('Failed To Connect !');
    }
  }

  signUp() {
    let modalRef = this.modal.open(SignUpComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }
}
