import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  onClose(){
    this.viewController.dismiss();
  }

}
