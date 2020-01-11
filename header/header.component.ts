import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() role = '';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logOut();
    this.router.navigateByUrl('/logout');
  }
}
