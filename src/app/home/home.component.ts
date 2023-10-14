import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  username: string | null = null;
  userId: string | null = null;
  stars: number = 0;
  disablePayBtn: boolean = false;
  isBalanceLoading: boolean = true;

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
      this.onLogIn();
    } else {
      this.router.navigate(['/login']);
    }
  }

  onLogIn() {
    this.dataService.getStarsBalance(this.userId).subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        this.stars += response[i].token;
        this.isBalanceLoading = false;
      }

      this.dataService.setStarsSession(this.stars);
    })
  }

  goToQrScanner() {
    this.disablePayBtn = true;
    this.router.navigate(['/qrcodescanner']);
  }

  logOut() {
    this.authService.logout();
    this.dataService.deleteAllSessions();
    this.router.navigate(['/login']);
  }

}
