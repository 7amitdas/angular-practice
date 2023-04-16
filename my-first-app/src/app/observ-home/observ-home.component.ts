import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observ-home',
  templateUrl: './observ-home.component.html',
  styleUrls: ['./observ-home.component.css'],
})
export class ObservHomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log('Count:::::' + count);
    // });
    const customIntervalObserable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });
    this.firstObsSubscription = customIntervalObserable.subscribe((data) => {
      console.log('Count:::::' + data);
    }, (error) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Custom Observable has completed Processing Data');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}