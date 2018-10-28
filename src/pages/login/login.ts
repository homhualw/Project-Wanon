import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
//import provider เข้ามา แล้วเอาไปไว้ที่ constructor
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service'
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //กำหนดตัวแปรรับค่าจากฟอร์ม มักประกาศเป็นarrayเพราะต้องรับค่าจาก่json

  userData = {
    "username": "",
    "password": ""
  }
  //กำหนดตัวแปรรับค่าจาก web api เพื่อเอาไว้ตรวจสอบ
  responseData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public webAPI: WebapiServiceProvider,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  regiSter() {
    this.navCtrl.setRoot(RegisterPage);
  }
  loginProcess() {
    //alert(this.userData.username+this.userData.password);
    //ทำการสร้างเพื่อlogin
    this.webAPI.postData(this.userData, "login.php").then((result) => {
      // console.log(result);
      this.responseData = result;
      if (this.responseData.userData != null) {

        //ทำการบันทึกข้อมูลลงในlocalเวลาเข้าอีกทีจะได้ไม่ต้องloginใหม่ แล้วค่อยเอาไปประยุกต์ใช้ไปที่หน้าapp component
        localStorage.setItem("userLogin", this.responseData.userData.username);
        localStorage.setItem("fullnameLogin", this.responseData.userData.fullname);


        //alert("success");
        /* //สร้างalertที่สวยงาม
        let alert = this.alertCtrl.create({
          title: 'สถานะเข้าระบบ',
          subTitle: 'เข้าระบบสำเร็จ',
          //message:"<center><img src='ที่อยู่รูปภาพ' width='100'><p style='margin-top:0px'>ข้อความที่จะบอก</p></center>'",
                 buttons: [
            {
              text: 'ปิดหน้าต่าง',
              handler: () => {
                //เหตุการณ์เมื่อกดปิดหน้าต่าง
                this.navCtrl.setRoot(TabsPage);
              }
            }]
        });
        alert.present();*/

        //ถูกแล้วจะไปหน้าเริ่มต้นหรือหน้าที่ต้องการ
        this.navCtrl.setRoot(TabsPage);
      } else {
        //alert("Faillll");
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
  onChange(key) {
    if (key == 13) {
      this.loginProcess();
    }
    //alert(key)
  }
}
