import { ProfilesPage } from './../profiles/profiles';
import { HomePage } from './../home/home';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl : 'contact-details.html'

})
export class ContactDetailsPage implements OnInit{
    data: string;
    constructor(private navCtrl: NavController, private navParams:NavParams) {
    }

    ngOnInit() {
        this.data = this.navParams.get('data');
    }
    goHome() {
        this.navCtrl.popTo(ProfilesPage);
        //this.navCtrl.first();
    }
    ionViewCanEnter(): boolean |  Promise<boolean> {
        console.log("ionViewCanEnter");
        let rand = Math.random();
        return rand > 0.1
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter");
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter");
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad");
    }

    ionViewCanLeave(): boolean |  Promise<boolean> {
        console.log("ionViewCanLeave");
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
        return promise;
    }
    ionViewWillLeave() {
        console.log("ionViewWillLeave");
    }
    ionViewDidLeave() {
        console.log("ionViewDidLeave");
    }
    ionViewWillUnload() {
        console.log("ionViewWillUnload");
    }


}