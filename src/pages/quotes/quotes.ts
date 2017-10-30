import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertController: AlertController,
    private quotesService: QuotesService) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this approach
  //<ion-title>{{ quoteGroup?.category | uppercase}}</ion-title>
  // }

  onAddFavorites(selectedQuote: Quote){
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          console.log('OK');
          this.quotesService.addQuoteToFavorites(selectedQuote);
        }
      },{
        text: 'No, I changed my mind',
        role: 'cancel', //if click outside the popup
        handler: () => {
          console.log('NO');
        }
      }]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }
}
