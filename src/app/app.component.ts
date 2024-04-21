import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { TitleComponent } from '../Components/title/title.component';
import { ProductsComponent } from '../Components/products/products.component';
import { TableStudentComponent } from '../Components/table-student/table-student.component';
import { TracksComponent } from '../Components/tracks/tracks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,TitleComponent,ProductsComponent,TableStudentComponent,TracksComponent,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerce';
  // currentComponent:string="home";
  // ShowComponent(componentName:string):void{
  //   this.currentComponent=componentName;
  // }
}
