import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authServ: AuthService
  ) {}

  ngOnInit() {}

  onLoadServers() {
    this.router.navigate(['/servers']); // Absolute Path
    //this.router.navigate(['/servers'], {relativeTo : this.route}); // Relative Path
  }

  onLogin() {
    this.authServ.login();
  }

  onLogOut() {
    this.authServ.logout();
  }
}