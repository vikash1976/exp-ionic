import { QuotesPage } from './../quotes/quotes';
import { Quote } from './../../app/data/quote.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import quotes from './../../app/data/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quotes : {category: string, quotes: Quote [], icon: string} [];
  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }
  ionViewWillEnter() {
    this.quotes = quotes;
  }

}
