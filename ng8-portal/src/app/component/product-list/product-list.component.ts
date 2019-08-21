import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public username = '';
  public email = '';
  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.email = sessionStorage.getItem('email');
  }

}
