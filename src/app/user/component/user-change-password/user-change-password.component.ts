import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Password} from '../../../model/user/password';
import {Home} from '../../../model/home/Home';
import {MustMatch} from './must-match.validator';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  checkoutForm: FormGroup;
  username: string;
  submitted = false;
  errorMessage: string;
  successMessage: string;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private location: Location) {
    this.username = sessionStorage.getItem('username');
  }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
        currentPassword: '',
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmNewPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('newPassword', 'confirmNewPassword'),
      },
    );
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit(passwordData) {
    this.submitted = true;
    this.successMessage = undefined;
    this.errorMessage = undefined;
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
    console.log(password);
    this.userService.changePassword(password).subscribe(
      result => {
        this.successMessage = result.message;
        this.checkoutForm.reset();
      }, error => {
        console.log(error);
        this.errorMessage = error;
      }
    );
  }
  // goBack() {
  //   this.location.back();
  // }
}

function passwordMatchValidator(group: FormGroup): any {
  if (group) {
    if (group.get('password').value) {
      return {notMatching: true};
    }
  }

  return false;
}
