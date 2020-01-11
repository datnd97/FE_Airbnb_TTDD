import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successMessage = '';
  failMessage = '';
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    role: new FormControl('')
  });

  constructor(private userService: UserService) {
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
        role: this.registerForm.value.role,

      };
      this.userService.register(user).subscribe(() => {
        this.successMessage = 'Đăng ký thành công';
        this.registerForm.reset();
      }, () => {
        this.failMessage = 'Đăng ký thất bại';
      });
    }
  }

}
