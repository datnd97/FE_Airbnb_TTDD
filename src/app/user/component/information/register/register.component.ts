import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import {User} from '../../../../model/user/user';
import {Role} from '../../../../model/user/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successMessage = '';
  failMessage = '';
  roles: Role[] = [];
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    roleId: new FormControl('')
  });

  constructor(private userService: UserService) {
    userService.getRoles().subscribe(
      data => {
        this.roles = data;
        console.log('roles');
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

  register() {
    const username = this.registerForm.value.username;
    const usernameNotEmpty = username.trim() !== '';
    const passwordNotEmpty = username.trim() !== '';
    if (usernameNotEmpty && passwordNotEmpty) {
      const user: User = {
        id: this.registerForm.value.id,
        name: this.registerForm.value.name,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        roleId: this.registerForm.value.roleId,
      };
      alert(JSON.stringify(user));
      this.userService.register(user).subscribe(() => {
        this.successMessage = 'Đăng ký thành công';
        this.registerForm.reset();
      }, () => {
        this.failMessage = 'Đăng ký thất bại';
      });
    }
  }

  getRoles() {
    this.userService.getRoles().subscribe(
      data => {
        this.roles = data;
        console.log('roles');
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
