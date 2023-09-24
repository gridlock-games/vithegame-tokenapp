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

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.refNum = Date.now().toString();
    this.currentDate = new Date();
    this.amount = this.dataService.getAmountPaidSession();
  }

  home() {
    this.router.navigate(['/home']);
  }

}
