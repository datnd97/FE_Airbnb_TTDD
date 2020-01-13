import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role = '';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
  }

  logout() {
    if (confirm('Ban co chac chan muon log out')) {
      console.log('123');
      this.userService.logOut();
      this.router.navigate(['/home-login']);
    } else {
      this.router.navigate(['']);
    }
  }
}
