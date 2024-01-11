import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  /**
   * Getter for activeToInactiveCount
   */
  get inactiveToActiveCount() {
    return this.counterService.inactiveToActiveCounter;
  }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  /**
   * Method to set user to active via service
   * @param id user's index
   */
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
