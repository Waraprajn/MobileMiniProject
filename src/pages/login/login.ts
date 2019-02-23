import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string ;
  password:string ;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider ) {

    }
    ionViewDidEnter(){
      console.log("username is Comsci15");
      console.log("password is Helloworld2019");
    }
    SignIN(){
      if(this.username != "Comsci15" && this.password != "Helloworld2019"){
        this.alertCtrl.create({
          title: "username or password invalid!",
          message: "please re-enter username or password",
          buttons: ['OK']
        }).present();
      }else{
        this.navCtrl.push(TabsPage);
        this.authService.login();

      }
    }

}
