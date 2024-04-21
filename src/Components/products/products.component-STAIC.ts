import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { Product } from '../../Modules/Iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product [];
  constructor(public productservice:ProductsService){
    this.products=this.productservice.getAllProducts();
  }
  onDeleteProduct(id: number) {
    console.log('Deleted product with ID:', id);
    // You can handle the deletion or any other logic here
    console.log(id);
    console.log('old '+this.products)
    this.products= this.products.filter((item)=>item.id!=id);
    console.log('new '+this.products)

  }
}
