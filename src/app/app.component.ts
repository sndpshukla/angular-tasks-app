import { Component } from '@angular/core';

import { DUMMY_USERS } from './mocks/dummy-users';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tasks-app';
  users = DUMMY_USERS;

  selectedUser: User | null = null;

  onUserSelect(user: User) {
    console.log('selected user', user);
    this.selectedUser = user;
  }
}
