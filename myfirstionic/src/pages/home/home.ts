import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  features = [
    "Search for a github account.",
    "Glance at repos of the account.",
    "Go to a selected repo of interest."
  ];

  constructor(public navCtrl: NavController) {

  }

}
