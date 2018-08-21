import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';
import { Match } from './match.model';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {

  matches: Match[];
  teams: any;
  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartola: CartolaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
    this.cartola.getMatches()
      .subscribe(data => {
        this.info = data;
        this.matches = data['partidas'];
        this.teams = data['clubes'];
        /* this.matches.sort(this.compareDates);         */

        this.matches
          .sort(this.compareDates)
          .map(match => {
            match.partida_data = new Date(match.partida_data);
          })

      })
  }

  compareDates(a: Match, b: Match) {
    if (a.partida_data > b.partida_data) {
      return 1;
    } else if (a.partida_data < b.partida_data) {
      return -1;
    }
    return 0;
  }

  getMatches() {

  }

  getTeamById(id) {
    return this.teams[id];
  }

  getPerfomanceColor(aprov) {
    if (aprov == 'd') {
      return 'red';
    } else if (aprov == 'e') {
      return 'gray';
    }
    return 'green';
  }
}
