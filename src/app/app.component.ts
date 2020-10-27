import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';

import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled6';

  constructor(
    private categoryService : CategoryService,
    private userService : UserService,
    private authService : AuthService,
    private orderService : OrderService,
    private productService: ProductService
  ){}

  ngOnInit(){

    //5f9827a714c4a7236c2927bc
    //5f9827b814c4a7236c2927bd
    //sushi

    // this.authService.logout();
    // console.log(this.authService.isLoggedIn());

    // console.log(this.authService.isAdmin());
    // if(this.authService.isAdmin()){
    //   console.log('admin');
    // }

    // if(!this.authService.isAdmin()){
    //   console.log('not admin');
    // }


    // this.productService.getProductDetails('5f9827a714c4a7236c2927bc').subscribe((data)=>{
    //       console.log(data);
    //   }, error=>{
    //     console.log(error);
    //   });
    

    // this.orderService.updateState('5f98134614c4a7236c2927bb', true).subscribe((data)=>{
    //       console.log(data);
    //   }, error=>{
    //     console.log(error);
    //   });

    // this.orderService.createOrder(
    //   'billy jinn',
    //   [
    //     {id: "1a2b3c", count: 5, price: 100},
    //     {id: "1a2b3d", count: 2, price: 200}
    //   ],
    //   'Lviv ...',
    //   '1234567980'
    // ).subscribe((data)=>{
    //         console.log(data);
    //     }, error=>{
    //       console.log(error);
    //     });

    // this.userService.login(
    //   'pussy_destroyer',
    //   "123456abc"
    //   ).subscribe((data)=>{
    //     console.log(data);
    //     this.authService.setLocalStorage(data);
    // }, error=>{
    //   console.log(error);
    // })
  }
}

