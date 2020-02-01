import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  user: any;
  role: any;
  constructor(private userService: UserService) {
    this.id = sessionStorage.getItem('id');
  }

  ngOnInit() {
    this.getUser(this.id);
    this.getRole();
  }

  getUser(id: string) {
    this.userService.getUser(this.id).subscribe(
      result => {this.user = result,
        console.log('>>>>user:' + JSON.stringify(this.user));
      },
      error => console.log(error)
    );
  }
  getRole() {
    this.role  = this.userService.getRole();
  }
}
