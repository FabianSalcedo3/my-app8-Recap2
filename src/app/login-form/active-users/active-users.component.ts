import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private usersService: UsersService) {

  }

  activeUsers: User[] = this.usersService.activeUsers;

  onCambiaStatus(user: User) {
    user.status === 'active' ? user.status = 'inactive' : user.status = 'active';
    this.usersService.aggiungiUtente(user);
  }
}
