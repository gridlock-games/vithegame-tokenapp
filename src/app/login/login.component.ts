import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  incorrectCreds: boolean = false;

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
      if (response.login) {

        // this.dataService.setUsernameSession(this.username);
        // this.dataService.setUserIdSession(response.userId);
        // this.router.navigate(['/home']);

        this.authService.login().subscribe(() => {
          if (this.authService.isLoggedIn) {
            this.dataService.setUsernameSession(this.username);
            this.dataService.setUserIdSession(response.userId); 
            console.log(this.username);
            console.log(response.userId);
            response.isPlayer === true ? this.router.navigate(['/home']) : this.router.navigate(['/store-home'])
          }
        });

      } else {
        this.incorrectCreds = true;
      }
    });

      
  }

  registrationBtnClick() {
    this.router.navigate(['/registration']);
  }

}
