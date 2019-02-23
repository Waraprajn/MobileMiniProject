import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  login = false;
  constructor( public navCtrl: NavController,
               public auth: AuthserviceProvider) {

  }
  ionViewWillEnter(){
   if(this.auth.isLoggedIn == false){
     this.navCtrl.push(LoginPage)
   }else{
     console.log("login success");
   }
  }
}
