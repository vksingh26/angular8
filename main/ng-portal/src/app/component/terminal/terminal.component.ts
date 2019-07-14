import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor(private loggedIn: AppComponent) {
    loggedIn.isLoggedIn = true;
  }

  ngOnInit() {
  }

}
