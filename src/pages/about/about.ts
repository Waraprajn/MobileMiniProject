import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              public auth:AuthserviceProvider) {

  }
  logout(){
    this.auth.logout();
  }
}
