import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  refNum: string = '';
  currentDate: any;
  amount: any;
  storeName: string | null = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
    ) {
      // if (!this.authService.isLoggedIn) {
      //   this.router.navigate(['/login']);
      // }
    }

  ngOnInit() {
    this.refNum = Date.now().toString();
    this.currentDate = new Date();
    this.amount = this.dataService.getAmountPaidSession();
    this.storeName = this.dataService.getStoreNameSession();
  }

  home() {
    this.router.navigate(['/home']);
  }

}
