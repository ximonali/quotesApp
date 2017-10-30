import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
quotes: Quote[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalController: ModalController) {
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  onViewQuote(quote: Quote){
    const modal = this.modalController.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean ) => {
      console.log(remove);
      if (remove){
        this.quotesService.removeQuoteFromFavorites(quote);
        //this.quotes = this.quotesService.getFavoriteQuotes();
        const positionQuote = this.quotes.findIndex((quoteElement: Quote) =>{
         return quoteElement.id == quote.id;
        });
        this.quotes.splice(positionQuote,1);
      }
    });
  }

}