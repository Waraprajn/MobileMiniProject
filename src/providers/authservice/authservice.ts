
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {

  public isLoggedIn = false;

  constructor() {
    console.log('Hello AuthserviceProvider Provider');
  }

  login(){
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
  }

  logout(){
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
  }

  isAlreadyLoggedIn(){
    return this.isLoggedIn;
  }

}
