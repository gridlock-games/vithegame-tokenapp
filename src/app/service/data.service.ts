import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://us-central1-vithegame.cloudfunctions.net/api';
  username: string = '';

  constructor(private httpClient: HttpClient) { }

  // sample get request
  public getRequest() {
    return this.httpClient.get(this.baseUrl + '/servers/duels');
  }

  // TO DO: Models for data type ? 
  public loginRequest(data: {username: string, password:string}) {
    return this.httpClient.post(this.baseUrl + '/auth/users/login', data);
  }

  public createUser(data: {email: '', username: '', password: '', isPlayer: '', tournamentType: []}){
    return this.httpClient.post(this.baseUrl + '/auth/users/create', data);
  }

  public getStarsBalance(userId: string | null) {
    return this.httpClient.get(this.baseUrl + '/auth/users/getStars/' + userId);
  }

  public userPaymentToStore(data: {'playerId': string | null, 'storeId': string | null, 'tokenCount': number, 'refId': string | null, 'transactionDate': string | null}) {
    return this.httpClient.post(this.baseUrl + '/auth/users/chargePlayer', data);
  }

  public addCreditToUser(data: {'playerId': string | null, 'tokenCount': number, 'refId': string | null, 'transactionDate': string | null}) {
    return this.httpClient.post(this.baseUrl + '/auth/users/creditPlayer', data);
  }

  public getUserInfo(id: string) {
    return this.httpClient.get(this.baseUrl + '/auth/users/getUser/' + id);
  }

  public getRefId() {
    return Date.now().toString() + this.randomString();
  }

  public getCurrentDate() {
    return new Date().toString();
  }

  randomString() {
    const length = 3;
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    
    return result;
  }

  // GET & SET STORAGE SESSIONS

  public setUsernameSession(username: string) {
    sessionStorage.setItem('username', username);
  }

  public getUsernameSession() {
    return sessionStorage.getItem('username');
  }

  public setUserIdSession(userId: string) {
    sessionStorage.setItem('userId', userId)
  }

  public getUserIdSession() {
    return sessionStorage.getItem('userId');
  }

  public setStarsSession(stars: number) {
    sessionStorage.setItem('stars', stars.toString());
  }

  public getStarsSession() {
    return Number(sessionStorage.getItem('stars'));
  }

  public setAmountPaidSession(amount: number) {
    sessionStorage.setItem('amount', amount.toString());
  }

  public getAmountPaidSession() {
    return Number(sessionStorage.getItem('amount'));
  }

  public setStoreIdSession(storeId: string) {
    sessionStorage.setItem('storeId', storeId);
  }

  public getStoreIdSession() {
    return sessionStorage.getItem('storeId');
  }

  public setStoreNameSession(storeName: string) {
    sessionStorage.setItem('storeName', storeName);
  }

  public getStoreNameSession() {
    return sessionStorage.getItem('storeName');
  }

  public setRefIdSession(setRefId: string) {
    sessionStorage.setItem('setRefId', setRefId);
  }

  public getRefIdSession() {
    return sessionStorage.getItem('setRefId');
  }

  public deleteAllSessions() {
    sessionStorage.clear();
  }

}
