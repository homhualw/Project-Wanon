import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
fullname:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.fullname=localStorage.getItem('fullnameLogin');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }
  logOutss(){
    //คำสั่งล้างค่าlocalStorage ออก
    localStorage.removeItem('userLogin');
    localStorage.removeItem('fullnameLogin');
    //กลับหน้าloginใหม่
    this.navCtrl.setRoot(LoginPage);
  }


}
