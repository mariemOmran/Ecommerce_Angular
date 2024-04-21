import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Modules/Iproduct';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-product-ditals',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './product-ditals.component.html',
  styleUrl: './product-ditals.component.css'
})
export class ProductDitalsComponent implements OnInit{
  productId:any;
  product?:Product;
  /**
   *
   */
  constructor(public activatedRoute:ActivatedRoute,public productServices:ProductsService) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    console.log(this.productId)
    this.product = this.productServices.getProductById(this.productId);
    console.log(this.product);
  }
}
