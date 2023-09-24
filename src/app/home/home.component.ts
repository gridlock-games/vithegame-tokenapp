import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  username: string | null = null;
  userId: string | null = null;
  stars: number = 0;

  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {
    this.userId = this.dataService.getUserIdSession();
    this.username = this.dataService.getUsernameSession();
  }



  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.logIn();
    } else {
      this.router.navigate(['/login']);
    }
  }

  logIn() {
    this.dataService.getStarsBalance(this.userId).subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        this.stars += response[i].token;
      }

      this.dataService.setStarsSession(this.stars);
    })
  }

  goToPaymentPage() {
    this.router.navigate(['/payment']);
  }

  logOut() {
    this.authService.logout();
    this.dataService.deleteAllSessions();
    this.router.navigate(['/login']);
  }

}
