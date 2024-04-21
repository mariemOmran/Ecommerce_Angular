import { ProductsService } from './../../../services/products.service';
import { productsList } from './../../../Modules/listProducts';
import { ProductsComponent } from './../products.component';
import { Component, Injectable, Input, Output ,EventEmitter} from '@angular/core';
import { Product } from '../../../Modules/Iproduct';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, RouterLink, RouterLinkActive, RouterModule,Router} from '@angular/router';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ProductsComponent,CommonModule,RouterLink,RouterLinkActive,RouterModule  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() product!: Product;
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();
  /**
   *
   */
  constructor(public productservice:ProductsService,public route:Router) {}
  delete(id:number){
    console.log(id);
    this.deleteProduct.emit(id); // Emit the ID directly
    console.log(this.deleteProduct.emit);

  }
}
