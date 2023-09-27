import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:7070';
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

  public getStarsBalance(userId: string | null) {
    return this.httpClient.get(this.baseUrl + '/auth/users/getStars/' + userId);
  }

  public userPaymentToStore(data: {'playerId': string | null, 'storeId': string | null, 'tokenCount': number}) {
    return this.httpClient.post(this.baseUrl + '/auth/users/chargePlayer', data);
  }

  public getUserInfo(id: string) {
    return this.httpClient.get(this.baseUrl + '/auth/users/getUser/' + id);
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

  public deleteAllSessions() {
    sessionStorage.clear();
  }

}
