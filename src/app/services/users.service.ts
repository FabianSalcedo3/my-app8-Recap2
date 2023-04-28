import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers: User[] = [];
  inactiveUsers: User[] = [];
  constructor() { }

  aggiungiUtente(user: User) {
    if (user.status === 'active') {
      for (let i = 0; i < this.inactiveUsers.length; i++) {
        if (this.inactiveUsers[i].id === user.id) {
          this.inactiveUsers.splice(i, 1);
        }
      }
      user.addActiveCount();
      this.activeUsers.push(user);
    } else {
      for (let i = 0; i < this.activeUsers.length; i++) {
        if (this.activeUsers[i].id === user.id) {
          this.activeUsers.splice(i, 1);
        }
      }
      user.addInactiveCount();
      this.inactiveUsers.push(user);
    }
  }
}
