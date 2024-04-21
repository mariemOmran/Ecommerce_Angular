
import { ActivatedRoute ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Modules/Iproduct';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { productsList } from '../../../Modules/listProducts';
import { ProductApiService } from '../../../services/product-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent implements OnInit {
 productForm=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(3)]),
  price:new FormControl(null,[Validators.required,Validators.min(10)]),
  quantity:new FormControl(null,[Validators.required,Validators.min(10)]),
 });
  productId:any;
  product?:Product;
  lengthOFArray:number= productsList.length;
  inName:string="";
  inPrice:number=0;
  inqunatity:number=0;
  constructor(
    public activedRoute:ActivatedRoute,
    public productService:ProductApiService,
    public route:Router
  ) {}
  ngOnInit(): void {
    this.productId=this.activedRoute.snapshot.params['id'];
    if(this.productId!=0){
      this.productService.getProductById(this.productId).subscribe({
        next:(data)=>{
          console.log(data)
          this.product=data;
          this.inName=this.product!.name;
      this.inPrice=this.product!.price;
      this.inqunatity=this.product!.quantity;
        }
      });
      
    }
  }
  addorEditePd(){

console.log(this.productId);

    if(this.productId==0){
      console.log('add product')
      let id = this.lengthOFArray+1;
 let newproduct:Product={
      name:this.inName,
      price:this.inPrice,
      quantity:this.inqunatity,
      description:"",
      image:"",
      id
    }
      this.productService.addProduct(newproduct).subscribe({
        next:()=>{
          this.route.navigate([""])

        }
      });
      console.log(productsList);
      
    }else{
      let newproduct:Product={
      name:this.inName,
      price:this.inPrice,
      quantity:this.inqunatity,
      description:"",
      image:"",
      id:this.productId
    }
      console.log("edite product ");
      this.productService.updateProduct(this.productId,newproduct).subscribe({
        next:()=>{
          this.route.navigate([""])

        }
      });
      console.log(productsList);
    }

  }
}
