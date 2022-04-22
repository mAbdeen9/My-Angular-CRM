import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  faA,
  faHouse,
  faUserGroup,
  faAddressCard,
  faFileArchive,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  faA = faA;
  faHouse = faHouse;
  faUserGroup = faUserGroup;
  faAddressCard = faAddressCard;
  faFileArchive = faFileArchive;
  faGear = faGear;
  faArrowRightFromBracket = faArrowRightFromBracket;
  @Input() classNav: string | undefined;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  hoverFun(
    Dashboard: any,
    Customers: any,
    Contacts: any,
    Reports: any,
    Settings: any,
    SignOut: any,
    target: any
  ) {
    Dashboard.classList.remove('hovered');
    Customers.classList.remove('hovered');
    Contacts.classList.remove('hovered');
    Reports.classList.remove('hovered');
    Settings.classList.remove('hovered');
    SignOut.classList.remove('hovered');
    target.classList.add('hovered');
  }

  signOut() {
    this.auth.logout().then(() => {
      localStorage.removeItem('/z!/!@');
      this.router.navigateByUrl('/login');
    });
  }
}
