import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shop:Shop[];
sho:Shop;
code:number;
  constructor() { }

  ngOnInit(): void {
this.sho = new Shop("Huawei","HongKong");
this.shop = [
  {
    name: "Apple ",
    address: "DownTown"
  },
  {
    name: "Samsung",
    address: "New Galaxy Town"
  }
]

  this.code = 13;

  }

  
}
