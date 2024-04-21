import { Injectable } from '@angular/core';
import { Product } from '../Modules/Iproduct';
import { ProductsComponent } from '../Components/products/products.component';
import { productsList } from '../Modules/listProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:Product[];
  constructor() {
  this.products=productsList;
  }
  getAllProducts():Product[]{
  return this.products;
  }
  getProductById (id:number):Product|undefined{
return this.products.find(e=>e.id==id);
  }
  addProduct(product:Product):void{
this.products.push(product);
  }
  deleteProduct(id:number):Product[]{
    console.log('old list',this.products);
    this.products=this.products.filter((item)=>item.id != id);
    console.log('new list',this.products);
    return this.products;
  }
  updateProduct(id:number,product:Product):Product{
const index = this.products.findIndex(item=>item.id==id);
console.log('old product',this.products[index]);
console.log('new product',product);
this.products[index].name= product.name;
this.products[index].price= product.price;
this.products[index].quantity= product.quantity;
return this.products[index];
  }
}
