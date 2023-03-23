export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  increaseInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('Inactive Counter:' + this.activeToInactiveCounter);
  }

  increaseActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('Active Counter:' + this.inactiveToActiveCounter);
  }
}