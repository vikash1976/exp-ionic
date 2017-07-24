import { SettingsPage } from './../settings/settings';
import { SettingsService } from './../../app/services/settings';
import { QuotePage } from './../quote/quote';
import { Quote } from './../../app/data/quote.interface';
import { QuotesService } from './../../app/services/quotes';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  favoriteQuotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewDidEnter() {
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
    console.log(this.favoriteQuotes);
  }

  ngOnInit() {
    /*this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
    console.log(this.favoriteQuotes);*/
  }

  onQuoteClicked(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, { quote: quote });
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });

  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorite(quote);
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

  getBackgroundColor() : string {
    return this.settingsService.hasDiffBackground() ? 'diffBackgroundColor' : '';
  }

  isDiffBackgroundColor() : boolean {
    return this.settingsService.hasDiffBackground();
  }
}
