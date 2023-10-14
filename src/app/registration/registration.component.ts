import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  subscription: Subscription = Subscription.EMPTY;
  email: string = '';
  isEmailValid: boolean = true;
  isEmptyEmail: boolean = false;
  username: string = '';
  isEmptyUsername: boolean = false;
  password: string = '';
  confirmPassword: string = '';
  isIncorrectPassword: boolean = false;
  isPwordLengthInvalid: boolean = false;
  is1v1: boolean = false;
  is5v5: boolean = false;
  registrationData: any = {username: '', password: '', userType: '', tournamentType: []};
  tournamentType: any[] = [];
  isError: boolean = false;
  disableRegBtn: boolean = false;
  isLoadingAlert: boolean = false;
  isSuccessAlert: boolean = false;
  isAcctExisting: boolean = false;
  
  constructor(
    private router: Router,
    private dataService: DataService) {
      
    }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  registrationBtnClick() {

    this.disableRegBtn = true;
    this.isLoadingAlert = true;
    this.validateEmail();
    this.validateUsername();
    this.validateConfirmPassword();

    this.registrationData = {
      email: this.email,
      username: this.username,
      password: this.password,
      isPlayer: true,
      tournamentType: this.tournamentType
    };

    if ((this.password === this.confirmPassword) && !this.isEmptyEmail && this.isEmailValid && !this.isEmptyUsername) {
      this.isIncorrectPassword = false;
      this.isEmptyEmail = false;
      this.isEmptyUsername = false;
      this.isPwordLengthInvalid = false;

      this.subscription = this.dataService.createUser(this.registrationData).subscribe({
        next: (res: any) => {
          // mes: 'Account Already exists';
          if(res.mes) {
            this.isError = true;
            this.isAcctExisting = true;
            this.disableRegBtn = false;
          }
          if (res._id) {
            const data = {'playerId': res._id , 'tokenCount': 10, 'refId': this.dataService.getRefId(), 'transactionDate': this.dataService.getCurrentDate()};
            this.dataService.addCreditToUser(data).subscribe((res: any) => {
              this.isLoadingAlert = false;
              this.isSuccessAlert = true;
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 3000);
            })
          }
        },
        error: (error) => {
          this.isError = true;
        }
      });
    } 
  }

  onCheckboxChange(e: any) {
    let index = this.tournamentType.indexOf(e.target.value);
    if (e.target.checked) {
      this.tournamentType.push(e.target.value);
    } else {
      this.tournamentType.splice(index, 1);
    }
  }

  validateEmail() {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    this.isEmailValid = (this.email !== '') ? emailRegex.test(this.email) : true;
    this.isEmptyEmail = (this.email === '') ? true : false;

  }

  validateUsername() {
    this.isEmptyUsername = (this.username === '') ? true : false;
  }

  validateConfirmPassword() {
    this.isPwordLengthInvalid = (this.password === '' || this.confirmPassword === '') ? false :
    (this.password.length >= 7 && this.confirmPassword.length >= 7 ) ? false : true;
    this.isIncorrectPassword = (this.password === '' || this.confirmPassword === '') ? false :
    (this.password !== this.confirmPassword) ? true : false;
  }

}
