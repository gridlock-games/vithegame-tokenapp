import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;

  constructor(private dataService: DataService) {
    if (this.dataService.getUserIdSession()) {
      this.isLoggedIn = true;
    }
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
