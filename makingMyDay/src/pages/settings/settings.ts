import { SettingsService } from './../../app/services/settings';
import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private settingService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(event: Toggle) {
    this.settingService.setDiffBackground(event.checked);
  }

  checkDiffBackground() {
    return this.settingService.hasDiffBackground();
  }

}
