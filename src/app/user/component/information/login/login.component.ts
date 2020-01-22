import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../model/user/authentication.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  returnUrl: string;
  error = '';
  loading = false;
  submitted = false;
  role = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }


  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log('data' + data.role + 'name' + data.name);
          sessionStorage.setItem('role', data.role);
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('id', data.id);
          sessionStorage.setItem('name', data.name);
          this.router.navigate(['homes']);
        },
        error => {
          this.error = 'Sai tên đăng nhập hoặc mật khẩu';
          this.loading = false;
          return false;
          // this.router.navigate(['/home-login']);
        });

  }


}
