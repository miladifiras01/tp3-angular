import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';
import { List } from 'immutable';

@Component({
  selector: 'app-user-list-items',
  templateUrl: './user-list-items.component.html',
  styleUrls: ['./user-list-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemsComponent {
  @Input() users: List<User> = List<User>();
}
