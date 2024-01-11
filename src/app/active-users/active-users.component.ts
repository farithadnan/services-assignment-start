import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = [];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  /**
   * Getter for activeToInactiveCount
   */
  get activeToInactiveCount() {
    return this.counterService.activeToInactiveCounter;
  }

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
  }

  /**
   * Method to set user to inactive via service
   * @param id user's index
   */
  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
