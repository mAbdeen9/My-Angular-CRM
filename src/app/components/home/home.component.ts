import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() classRecever: string | undefined;
  @Input() classRecever2: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  receiveMessage() {
    this.classRecever = this.classRecever === 'active' ? '' : 'active';
    this.classRecever2 = this.classRecever2 === 'active' ? '' : 'active';
  }
}
