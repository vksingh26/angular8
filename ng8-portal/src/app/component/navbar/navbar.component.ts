import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
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
  }
}
