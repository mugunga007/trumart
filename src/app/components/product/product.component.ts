import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Shop } from 'src/app/models/Shop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[];
product:Product;
shop:Shop = new Shop('Apple Store','Scarbo');
  constructor() { }
  ngOnInit(): void {
    this.product = new Product('iPhone','iPhone XS',new Date,4000,this.shop);
    this.products = [
      {
        name: "Samsung",
        model: "iSam",
        entry_date: new Date,
        price:1000,
        shop:this.shop
      },
      {
        name: "iPhone XS",
        model: "2019 Model",
        entry_date: new Date,
        price:2000,
        shop:this.shop
      },
      {
        name: "Mackbook",
        model: "Mackbook 15 2020",
        entry_date: new Date,
        price:3000,
        shop:this.shop
      }
    ]
  }

}
