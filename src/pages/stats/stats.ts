import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  title = "Stats Page";

  charts: any[];
  canvas = "canvas";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charts = [
      {
        type: 'line'
      },
      {
        type: 'bar'
      },
      {
        type: 'column'
      },
      {
        type: 'pie'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
    console.log(this.charts);
    
  }

}
