import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-observ-user',
  templateUrl: './observ-user.component.html',
  styleUrls: ['./observ-user.component.css']
})
export class ObservUserComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
