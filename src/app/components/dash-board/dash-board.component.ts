import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  @Input() classNav: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
