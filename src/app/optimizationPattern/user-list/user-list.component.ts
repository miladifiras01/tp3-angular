import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../users.service';
import { List } from 'immutable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: List<User> = List<User>();
  @Output() add = new EventEmitter<string>();
  addUser(name: string) {
    this.add.emit(name);
  }
}
