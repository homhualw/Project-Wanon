import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userData = {
    "username": "",
    "password": "",
    "fullname": "",
    "email": "",
    "tel": ""
  }
  //สร้างตัวแปรwebAPI
  pushin: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public webAPI: WebapiServiceProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  loginss() {
    this.navCtrl.setRoot(LoginPage);
  }
  reGisterss() {
    // alert("ยินดีต้อนรับ");

    this.webAPI.postData(this.userData, "register.php").then((result) => {
      //console.log(result);
      this.pushin = result;
      /* if(this.pushin.userData.username = null){
        let alert = this.alertCtrl.create({
          //title: 'สถานะเข้าระบบ',
          //subTitle: 'ป้อนข้อมูลไม่ถูกต้อง',
          message: "<center><img src='assets/imgs/error.jpg' width='100'><p style='margin-top:0px'>กรอกข้อมูลusername</p></center>'",
          buttons: ['ปิดหน้าต่าง']
        });
        alert.present();
       }else if(this.pushin.userData.password = null){
        let alert = this.alertCtrl.create({
          //title: 'สถานะเข้าระบบ',
          //subTitle: 'ป้อนข้อมูลไม่ถูกต้อง',
          message: "<center><img src='assets/imgs/error.jpg' width='100'><p style='margin-top:0px'>กรอกข้อมูลpassword</p></center>'",
          buttons: ['ปิดหน้าต่าง']
        });
        alert.present();
       }
       else {}*/
      if (this.pushin.userData != null) {
        let alert = this.alertCtrl.create({
          //title: 'สถานะเข้าระบบ',
          //subTitle: 'ป้อนข้อมูลไม่ถูกต้อง',
          message: "<center><img src='assets/imgs/success.jpg' width='100'><p style='margin-top:0px'>สำเร็จ</p></center>'",
          buttons: ['ปิดหน้าต่าง']
        });
        alert.present();
        this.navCtrl.setRoot(TabsPage);
      } else {
        let alert = this.alertCtrl.create({
          //title: 'สถานะเข้าระบบ',
          //subTitle: 'ป้อนข้อมูลไม่ถูกต้อง',
          message: "<center><img src='assets/imgs/error.jpg' width='100'><p style='margin-top:0px'>กรอกข้อมูลใหม่</p></center>'",
          buttons: ['ปิดหน้าต่าง']
        });
        alert.present();

      }


    });
  }
}
