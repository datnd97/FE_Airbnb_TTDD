import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Password} from '../../../model/user/password';
import {Home} from '../../../model/home/Home';
import {MustMatch} from './must-match.validator';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  checkoutForm: FormGroup;
  username: string;
  submitted = false;
  constructor(private userService: UserService,
              private fb: FormBuilder) {
    this.username = sessionStorage.getItem('name');
  }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      currentPassword: '',
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('newPassword', 'confirmNewPassword')
      });
  }
  get f() { return this.checkoutForm.controls; }

  onSubmit(passwordData) {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    const {currentPassword, newPassword, confirmNewPassword} = this.checkoutForm.value;
    const password: Password = {
      username: this.username,
      currentPassword,
      newPassword,
      confirmNewPassword
    };
    this.userService.changePassword(password).subscribe(
      result => {
        alert('Change Password Success');
        this.checkoutForm.reset();
      },
      error => console.log('Fail')
    );
  }

}
