import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled6';

  constructor(
    // private productService : ProductService
  ){}

  ngOnInit(){
  //   this.productService.getCategories().subscribe((data)=>{
  //     console.log(data);
  //   }, error=>{
  //     console.log(error);
  //   })
  }
}

