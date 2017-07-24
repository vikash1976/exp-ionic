import { QuotesService } from './../../app/services/quotes';
import { Quote } from './../../app/data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotesForCategory: { category: string, quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  /*ionViewDidLoad() {
    this.quotesForCategory = this.navParams.data;
  }*/

  ngOnInit() {
    this.quotesForCategory = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Add To Favorite",
      subTitle: "Sure to add to favorite",
      message: "You liked this quote and want to add to your favorite quotes list?",
      buttons: [
        {
          text: "Yes please!",
          handler: () => {
            console.log('Sure' + quote);
            this.quotesService.addQuoteToFavorite(quote);
          }
        },
        {
          text: "May be Not",
          role: 'cancel',
          handler: () => {
            console.log("Not really");
          }
        }
      ]
    });
    alert.present();
  }
  isQuoteFavorite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorite(quote);
  }
}
