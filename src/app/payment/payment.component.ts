import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService) {}

  ngOnInit() {
    this.stars = this.dataService.getStarsSession();
    this.userId = this.dataService.getUserIdSession();
    this.storeId = this.dataService.getStoreIdSession();

    // if (!this.authService.isLoggedIn) {
    //   this.router.navigate(['/login']);
    // }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  payment() {

    if (this.amount < this.stars) {
      this.isInvalidAmt = false;
      this.dataService.setAmountPaidSession(this.amount);
      const data = {'playerId': this.userId , 'storeId': this.storeId, 'tokenCount': this.amount};
      this.dataService.userPaymentToStore(data).subscribe(response => {
        if (response) {
          this.router.navigate(['/success']);
        } else {
          this.router.navigate(['/maintenance']);
        }
      })
    } else {
      this.isInvalidAmt = true;
    }
  }

}
