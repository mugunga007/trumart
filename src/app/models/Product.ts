import { Shop } from './Shop';

export class Product{

	 id?:number;
	name:string;
	model:string;
  entry_date:Date;
  price:number;
  shop:Shop;
  
  constructor(
    name:string,
    model:string,
    entry_date:Date,
    price:number,
    shop:Shop
  ){
this.name = name;
this.model = model;
this.entry_date = entry_date;
this.price = price;
this.shop = shop;
  }
}