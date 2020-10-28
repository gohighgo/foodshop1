import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  Register(name, pass): void{
    this.userService.register(
      name,
      pass,
      ' ',
      ' ',
      '111211111111',
      'testd@gmail.com'
    ).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/auth');
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
