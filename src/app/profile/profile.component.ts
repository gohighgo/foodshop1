import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  error: boolean = false;
  userName: string;

  userForm: FormGroup =  new FormGroup({
    "userLogin": new FormControl('', Validators.required),
    "userEmail": new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    "userAddress": new FormControl('', Validators.required),
    "userPhone": new FormControl('')
  });

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { 

    this.userId = this.authService.getUserId();
    this.userService.getUserById(this.userId).subscribe(
      (data) => {
        this.userForm.controls['userLogin'].setValue(data.login);
        this.userForm.controls['userEmail'].setValue(data.email);
        this.userForm.controls['userAddress'].setValue(data.address);
        this.userForm.controls['userPhone'].setValue(data.phoneNumber);
        this.userName = data.firstName;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.userForm);
    this.userService.changeAll(
      this.userId,
      this.userName,
      this.userForm.controls['userLogin'].value,
      this.userForm.controls['userEmail'].value,
      this.userForm.controls['userPhone'].value,
      this.userForm.controls['userAddress'].value
    ).subscribe(
      data => alert('Saved'),
      err => alert('Saving error: ' + err)
    );
  }

}
