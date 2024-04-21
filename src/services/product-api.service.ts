import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Modules/Iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
UrlBars:string ='http://localhost:3005/products';
  constructor(private htttp:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.htttp.get<Product[]>(this.UrlBars);
    }
    getProductById (id:number):Observable<Product>{
  return this.htttp.get<Product>(`${this.UrlBars}/${id}`);
    }
    addProduct(product:any){
      return this.htttp.post(this.UrlBars,product);
    }
        updateProduct(id:number,product:Product):Observable<Product>{
          console.log(id);
          console.log(product);

          return this.htttp.put<Product>(`${this.UrlBars}/${id}`,product);
            }
    deleteProduct(id:number):Observable<Product>{
      return this.htttp.delete<Product>(`${this.UrlBars}/${id}`);
        }
}
