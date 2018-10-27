import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //ตั้งค้่าหน้าแรกที่จะแสดง //โดยไปที่หน้าhomeก่อนแล้วไปดักเอาข้อมูลด้านล่าง
  // rootPage: any = LoginPage;
  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // side menu
    this.pages = [
      { title: 'ตารางสอน', component: SideSchedulePage },
      { title: 'เกี่ยวกับเรา', component: SidePortfolioPage },
      { title: 'จ่ายเงิน', component: SidePaymentPage },
      { title: 'ตั้งค่า', component: SideSettingPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //ตรวจว่ามีข้อมูลในlocal storageไหม มีข้อมูลloginไหม
      if (localStorage.getItem("userLogin") == null) {
        this.rootPage= LoginPage;
      } else {
        this.rootPage= TabsPage;
      }

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
