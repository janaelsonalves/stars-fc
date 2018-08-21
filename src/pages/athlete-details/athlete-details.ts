import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Scout } from '../../models/scout.model';
import { SCOUTS } from '../../models/mock-data/scouts.data.const';

/**
 * Generated class for the AthleteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-details',
  templateUrl: 'athlete-details.html',
})
export class AthleteDetailsPage {

  athlete: any;
  scouts: any[];

  scoutType: any = "all";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athlete = navParams.get('athlete');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteDetailsPage');
    //let object = this.athlete['scout'];
    this.scouts = this.getAllScouts(this.athlete['scout']);
    console.log(this.scouts);
  }

  getScoutsAsArray(object) {
    let scouts: any[] = [];
    Object.keys(object).map(key => {
      return scouts.push({
        sigla: key,
        quantidade: object[key]
      });
    })
  }

  getAllScouts(object: any) {
    let scouts: any[] = [];
    Object.keys(object).map(key => {
      let scout = this.getScout(key);
      scouts.push({
        scout: scout,
        quantity: object[key],
        total: this.getTotal(scout.pontos, object[key])
      });
    })
    return scouts;
  }

  getScout(sigla: string) {
    return SCOUTS.find(scout => scout.sigla == sigla);
  }

  getTotal(value: number = 0, quantity: number = 0) {
    return value * quantity;
  }
}
