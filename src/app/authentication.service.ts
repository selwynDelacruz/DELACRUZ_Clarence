import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticate = false; 

  /**
   * boolean state to false to deny unauthenticated buttons until "authenticate" button press is recognized
   */

  constructor() {}

  canActivate() {
    return this.authenticate; // method to allow to authenticate buttons to access succeeding pages
  }
}