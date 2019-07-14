import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { log } from 'util';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private loggedIn: AppComponent) {
  }

  // userTestStatus: {}[] = [
  //   { id: 0, menu: 'Service', submenu: [{ id: 0, name: 'Merchant' }, { id: 1, name: 'Transaction' }, { id: 0, name: 'Terminal' }] },
  //   { id: 1, menu: 'Service Two', submenu: [{ id: 0, name: 'User' }, { id: 1, name: 'Create User' }, { id: 0, name: 'Roles' }] }
  // ];
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
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `#ffffff`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
  };
  ngOnInit() {
  }

  selectedItems(e) {
    console.log(e);
  }
  selectedLabels(e) {
    console.log(e);
   }
  logout(val: any) {
    this.loggedIn.isLoggedIn = false;
  }
}
