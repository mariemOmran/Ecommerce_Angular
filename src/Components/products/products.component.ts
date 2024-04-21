import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { Product } from '../../Modules/Iproduct';
import { ProductsService } from '../../services/products.service';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Product [];
  constructor(public productservice:ProductApiService){ 
    this.products=[];
  }
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:()=>{}
    });
  }
  onDeleteProduct(id: number) {
    console.log('Deleted product with ID:', id);
    // You can handle the deletion or any other logic here
    console.log(id);
    console.log('old '+this.products);
    
    this.products= this.products.filter((item)=>item.id!=id);
    this.productservice.deleteProduct(id).subscribe({
      next:()=>{}
    });
    console.log('new '+this.products)

  }
}
