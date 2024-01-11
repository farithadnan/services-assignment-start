import { Component } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  /**
   * Getter for inactiveUsers
   */
  get inactiveUsers() {
    return this.usersService.inactiveUsers;
  }

  /**
   * Getter for activeToInactiveCount
   */
  get inactiveToActiveCount() {
    return this.counterService.inactiveToActiveCounter;
  }

  /**
   * Method to set user to active via service
   * @param id user's index
   */
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
