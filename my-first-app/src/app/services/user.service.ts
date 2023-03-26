import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Sam', 'Dean'];
  inactiveUsers = ['Castiel', 'Crowley'];

  constructor(private counterService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increaseActiveCounter();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increaseInactiveCounter();
  }
}