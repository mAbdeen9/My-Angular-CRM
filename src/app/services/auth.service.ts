import { Injectable } from '@angular/core';
import { Auth, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  logout() {
    return this.auth.signOut();
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  localStorageChecker() {
    if (localStorage.getItem('/z!/!@')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  register(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }
}
