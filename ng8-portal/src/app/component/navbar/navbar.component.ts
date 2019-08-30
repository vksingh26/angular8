import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {
  }
  appitems = [
    {
      label: 'Service',
      externalRedirect: true,
      items: [
        {
          label: 'Merchant',
          link: '/merchant',
        },
        {
          label: 'Terminal',
          link: '/terminal',
        }
      ]
    },
    {
      label: 'Service Two',
      externalRedirect: true,
      items: [
        {
          label: 'Role',
          link: '/role',
        },
        {
          label: 'User',
          link: '/user',
        }
      ]
    }
  ];
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `#ffffff`,
    fontColor: `#333`,
    backgroundColor: `#ffffff`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
    fixed: false
  };
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout() {
    this.authService.logout();
  }
  selectedItems(e) {
    console.log(e);
  }
  selectedLabels(e) {
    console.log(e);
  }
}
