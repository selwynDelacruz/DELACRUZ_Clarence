import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {
  authentication = false;
  constructor() { }

  canActivate(){
    return this.authentication;
  }
}
