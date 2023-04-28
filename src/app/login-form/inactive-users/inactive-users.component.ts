import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersService: UsersService) {

  }

  inactiveUsers: User[] = this.usersService.inactiveUsers;

  onCambiaStatus(user: User) {
    user.status === 'active' ? user.status = 'inactive' : user.status = 'active';
    this.usersService.aggiungiUtente(user);
  }
}
