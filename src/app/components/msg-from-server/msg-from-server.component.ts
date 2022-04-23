import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msg-from-server',
  templateUrl: './msg-from-server.component.html',
  styleUrls: ['./msg-from-server.component.css'],
})
export class MsgFromServerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/home/Dashboard');
    }, 1000);
  }
}
