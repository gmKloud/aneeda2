import { Component , NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ToastController } from 'ionic-angular';

//declare speech recognition: any
declare var platform: any;
declare var window: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
