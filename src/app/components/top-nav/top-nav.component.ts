import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  @Output() messageEvent = new EventEmitter();
  userName: string | undefined;
  constructor() {}
  ngOnInit(): void {
    const str = JSON.parse(localStorage.getItem('/z!/!@')!);
    this.userName = str[0].toUpperCase() + str.slice(1);
  }

  sendClass() {
    let main = document.querySelector('.main-top-nav');
    if (main?.classList.contains('active')) {
      main?.classList.remove('active');
    } else {
      main?.classList.add('active');
    }
    this.messageEvent.emit();
  }
}
