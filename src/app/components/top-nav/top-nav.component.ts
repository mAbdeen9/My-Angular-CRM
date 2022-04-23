import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  faBars = faBars;
  @Output() messageEvent = new EventEmitter();
  userName: string | undefined;
  constructor() {}
  ngOnInit(): void {
    const str = JSON.parse(localStorage.getItem('/z!/!@')!);
    this.userName = str[0].toUpperCase() + str.slice(1);
  }

  sendClass() {
    let main = document.querySelector('.main-top-nav');
    let dash = document.querySelector('.dashboard');
    let nav = document.querySelector('.nav');

    main?.classList.toggle('active');
    dash?.classList.toggle('active');
    nav?.classList.toggle('active');
  }
}
