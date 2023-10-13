import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthService } from '../auth/auth.service';
import { underscore } from '@angular-devkit/core/src/utils/strings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  incorrectCreds: boolean = false;
  isVerified: boolean = false;
  isLoginRequestSent: boolean = false;
  isAddCreditSuccess: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.dataService.deleteAllSessions();
    this.authService.logout();
  }

  ngOnInit(): void {}

  loginBtnClick() {
    const data = {username: this.username, password: this.password};

    this.dataService.loginRequest(data).subscribe((response: any) => {
      console.log(response);
      this.isLoginRequestSent = true;
      this.isVerified = (response.isVerified === undefined || response.isVerified) ? true : false;
      this.incorrectCreds = (response.isVerified === undefined && response.login === false) ? true : false;

      // const addCreditData = {playerId: response.userId, tokenCount: 10, refId: this.dataService.getRefId(), transactionDate: this.dataService.getCurrentDate()};
      // this.dataService.addCreditToUser(addCreditData).subscribe((res: any) => {
      //   this.isAddCreditSuccess = res;
      // });
      // && this.isAddCreditSuccess
      
      if (response.login) {
        this.authService.login().subscribe(() => {
          if (this.authService.isLoggedIn) {
            this.dataService.setUsernameSession(this.username);
            this.dataService.setUserIdSession(response.userId);
            response.isPlayer === true ? this.router.navigate(['/home']) : this.router.navigate(['/store-home'])
          }
        });
      } 
    });

      
  }

  registrationBtnClick() {
    this.router.navigate(['/registration']);
  }

}
