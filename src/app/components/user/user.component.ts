import { Component, computed, Input, input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => {
    return `assets/users/${this.user().avatar}`;
  });

  onHandleUserClick() {
    console.log('User selected', this.user());
  }
}
