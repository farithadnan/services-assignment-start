import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  /**
   * Method to increment activeToInactiveCounter
   */
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
  }

  /**
   * Method to increment inactiveToActiveCounter
   */
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
  }

  /**
   * Method to reset activeToInactiveCounter
   * and inactiveToActiveCounter to 0
   */
  resetAllCounter() {
    this.activeToInactiveCounter = 0;
    this.inactiveToActiveCounter = 0;
  }
}
