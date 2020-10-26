import { Component, OnInit } from '@angular/core';

// import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled6';

  constructor(
    // private productService : ProductService
    private userService : UserService
  ){}

  ngOnInit(){
    // this.userService.login(
    //   'pussy_destroyer',
    //   "123456abc"
    // ).subscribe((data)=>{
    //   console.log(data);
    // }, error=>{
    //   console.log(error);
    // })
  }
}

