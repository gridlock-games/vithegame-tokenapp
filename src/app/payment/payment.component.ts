import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount: any;
  stars: number = 0;
  isInvalidAmt: boolean = false;
  userId: string | null = '';
  storeId: string | null = '';
  storeName: string | null = '';
  refId: string | null = '';
  currentDate: string | null = '';
  disablePayBtn: boolean = false;
  isLoadingAlert: boolean = true;
  isError: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService) { }

  ngOnInit() {
    this.stars = this.dataService.getStarsSession();
    this.userId = this.dataService.getUserIdSession();
    this.storeId = this.dataService.getStoreIdSession();
    this.storeName = this.dataService.getStoreNameSession();

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  payment() {
    this.isInvalidAmt = (this.amount > this.stars);

    if (this.amount < this.stars) {
      this.isLoadingAlert = true;
      this.disablePayBtn = true;
      this.isInvalidAmt = false;
      this.dataService.setAmountPaidSession(this.amount);
      this.refId = this.dataService.getRefId();
      this.currentDate = this.dataService.getCurrentDate();
      const data = {
        'playerId': this.userId, 'storeId': this.storeId, 'tokenCount': this.amount,
        'refId': this.refId, 'transactionDate': this.currentDate
      };
      this.dataService.setRefIdSession(this.refId);

      this.dataService.userPaymentToStore(data).subscribe({
        next: (response) => {
          if (response) {
            this.isLoadingAlert = false;
            this.router.navigate(['/success']);
          }
        },
        error: (error) => {
          this.isError = true;
          this.router.navigate(['/maintenance']);
        }
      });

    }
  }

}
