import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObserveUserService } from './observ-user.service';

@Component({
  selector: 'app-observ-user',
  templateUrl: './observ-user.component.html',
  styleUrls: ['./observ-user.component.css']
})
export class ObservUserComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private obsUserService: ObserveUserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    this.obsUserService.activatedEmitter.next(true);
  }
}
