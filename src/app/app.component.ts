import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

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
    private userService : UserService,
    private authService : AuthService
  ){}

  ngOnInit(){
    // this.authService.logout();
    // console.log(this.authService.isLoggedIn());

    // console.log(this.authService.isAdmin());
    // if(this.authService.isAdmin()){
    //   console.log('admin');
    // }

    // if(!this.authService.isAdmin()){
    //   console.log('not admin');
    // }

    // this.userService.login(
    //   'pussy_destroyer123',
    //   "123456abc"
    //   ).subscribe((data)=>{
    //     console.log(data);
    //     this.authService.setLocalStorage(data);
    // }, error=>{
    //   console.log(error);
    // })
  }
}

