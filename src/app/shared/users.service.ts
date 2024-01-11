import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  /**
   * Method to set user to inactive
   * @param id user's index
   */
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  /**
   * Method to set user to active
   * @param id user's index
   */
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }
}
