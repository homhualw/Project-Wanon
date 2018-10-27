import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
  //side page menu
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
  //tab page menu
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
//สร้างเว็ป api provider
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    //sidemenu
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    //tabmenu
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabsPage,
    TabServicePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //sidemenu
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    //tabmenu
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabsPage,
    TabServicePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider
  ]
})
export class AppModule {}
