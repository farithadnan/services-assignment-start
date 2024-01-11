import { Component } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  /**
   * Getter for activeUsers
   */
  get activeUsers() {
    return this.usersService.activeUsers;
  }

  /**
   * Getter for activeToInactiveCount
   */
  get activeToInactiveCount() {
    return this.counterService.activeToInactiveCounter;
  }

  /**
   * Method to set user to inactive via service
   * @param id user's index
   */
  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
