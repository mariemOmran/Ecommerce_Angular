import { Routes } from '@angular/router';
import { ProductsComponent } from '../Components/products/products.component';
import { ProductFormComponent } from '../Components/products/product-form/product-form.component';
import { ProductDitalsComponent } from '../Components/products/product-ditals/product-ditals.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';


export const routes: Routes = [
    {path:'',component:ProductsComponent},
    {path:'products/:id',component:ProductDitalsComponent},
    {path:'products/:id/edit',component:ProductFormComponent},
    {path:"**",component:NotFoundComponent}
];
