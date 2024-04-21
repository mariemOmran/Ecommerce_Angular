// import { ProductsService } from './../../../services/products.service';
// import { ActivatedRoute ,Router} from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { Product } from '../../../Modules/Iproduct';
// import { FormsModule } from '@angular/forms';
// import { productsList } from '../../../Modules/listProducts';


// @Component({
//   selector: 'app-product-form',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './product-form.component.html',
//   styleUrl: './product-form.component.css'
// })

// export class ProductFormComponent implements OnInit {
//   productId:any;
//   product?:Product;
//   lengthOFArray:number= productsList.length;
//   inName:string="";
//   inPrice:number=0;
//   inqunatity:number=0;
//   constructor(
//     public activedRoute:ActivatedRoute,
//     public productService:ProductsService,
//     public route:Router
//   ) {}
//   ngOnInit(): void {
//     this.productId=this.activedRoute.snapshot.params['id'];
//     if(this.productId!=0){
//       this.product=this.productService.getProductById(this.productId);
//       this.inName=this.product!.name;
//       this.inPrice=this.product!.price;
//       this.inqunatity=this.product!.quantity;
//     }
//   }
//   addorEditePd(){

// console.log(this.productId);

//     if(this.productId==0){
//       console.log('add product')
//       let id = this.lengthOFArray+1;
//  let newproduct:Product={
//       name:this.inName,
//       price:this.inPrice,
//       quantity:this.inqunatity,
//       description:"",
//       image:"",
//       id
//     }
//       this.productService.addProduct(newproduct);
//       console.log(productsList);
//       this.route.navigate([""])
      
//     }else{
//       let newproduct:Product={
//       name:this.inName,
//       price:this.inPrice,
//       quantity:this.inqunatity,
//       description:"",
//       image:"",
//       id:this.productId
//     }
//       console.log("edite product ");
//       this.productService.updateProduct(this.productId,newproduct);
//       console.log(productsList);
//         this.route.navigate([""])
//     }

//   }
// }
