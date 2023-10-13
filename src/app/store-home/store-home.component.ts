import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent implements OnInit {

  userId: string | null = '';
  username: string | null = '';
  stars: number = 0;
  transactions: any[] = [];
  transactionData: any;

  @ViewChild('action') action!: NgxScannerQrcodeComponent;
  myAngularxQrCode: any;


  constructor (
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) {
    this.userId = this.dataService.getUserIdSession();
    this.username = this.dataService.getUsernameSession();
    this.myAngularxQrCode = this.userId;
  }

  ngOnInit() {
    this.dataService.getStarsBalance(this.userId).subscribe((response: any) => {
      this.transactions = response;
      for (let i = 0; i < response.length; i++) {
        this.stars += response[i].token;
      }

      this.dataService.setStarsSession(this.stars);
    })
  }

  logOut() {
    this.authService.logout();
    this.dataService.deleteAllSessions();
    this.router.navigate(['/login']);
  }

  selectedTransaction(t: any) {
    this.transactionData = t;
  }

}
