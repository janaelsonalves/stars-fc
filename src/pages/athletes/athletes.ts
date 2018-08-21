import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AthletesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  athletes: Array<any>;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartola: CartolaProvider) {
    this.cartola.getAllData()
      .subscribe(data => {
        this.data = data;
        this.athletes = data['atletas'];
      })
  }

  getAthletes() {
    return this.data['atletas'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthletesPage');
  }

  openDetails(athlete: any){
    this.navCtrl.push('AthleteDetailsPage', {athlete: athlete})
  }

}
