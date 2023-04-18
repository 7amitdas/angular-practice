import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ObserveUserService {
    activatedEmitter = new Subject<boolean>();

}
