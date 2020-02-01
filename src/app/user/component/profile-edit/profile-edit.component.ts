import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../model/user/user';
import {UserService} from '../../../service/user.service';
import {UserForm} from './UserForm';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  @Input() user: User;
  @Output() valueChange = new EventEmitter();
  isErrorUser = false;
  errorUser: string;
  userUpdate: any;
  inputName = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  updateUser(closeButton: HTMLInputElement) {
    const {name} = this.inputName.value;
    if (name === '') {
      this.isErrorUser = true;
      return this.errorUser = 'Fail! Nothing Change.';
    }
    const userForm = new UserForm(this.user.id, name);
    this.userService.updateUser(userForm).subscribe(
      result => {
        console.log('Thanh cong');
        this.valueChanged();
        closeButton.click();
      },
      error => {
        console.log(this.isErrorUser, this.errorUser);
        this.isErrorUser = true;
        return this.errorUser = 'Fail!.';
      }
    );
  }

  valueChanged() {
    this.userService.getUser(this.user.id).subscribe(
      data => {
        this.userUpdate = data;
        this.valueChange.emit(this.userUpdate);
      }
    );
  }
}
