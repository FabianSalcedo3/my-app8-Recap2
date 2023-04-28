import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  id!: number;
  name!: string;
  status!: "active" | "inactive";
  user!: User;

  constructor(private usersService: UsersService) {

  }

  onCreaUtente() {
    this.user = new User(this.id, this.name, this.status, 0, 0);
    this.usersService.aggiungiUtente(this.user);

  }
}
