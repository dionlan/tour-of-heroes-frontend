import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../models/credentials.mode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  login(credentials: Credentials): void {
    localStorage.setItem('token', credentials.password);
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard'])
  }

  logout(): void {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login'])
  }
}
