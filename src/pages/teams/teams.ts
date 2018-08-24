import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  data: any;
  teams: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartola: CartolaProvider) {

  }


  ionViewDidLoad() {
    this.cartola.getAllData()
      .subscribe(data => {
        this.teams = this.getAllTeams(data['clubes']);
        this.teams.sort(this.compareTeamsByPosition);
        this.data = data;
        console.log(this.getTeamAthletesById(262));
      })
  }

  getAllTeams(object: any): any[] {
    let array = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        array.push(element);
      }
    }
    return array;
  }

  getShieldImage(team: any, size: number = 0) {
    let image = '';
    switch (size) {
      case 60:
        image = team.escudos['60x60'];
        break;
      case 45:
        image = team.escudos['45x45'];
        break;
      default:
        image = team.escudos['30x30'];
        break;
    }
    return image;
  }

  compareTeamsByPosition(a: any, b: any) {
    return a.posicao - b.posicao;
  }

  showTeam(team: any) {
    this.navCtrl.push('TeamDetailsPage', {
      data: {
        info: team,
        athletes: this.getTeamAthletesById(team.id)
      }
    })
  }

  getTeamAthletesById(teamId: any) {
    let athletes: any[] = this.data['atletas'];
    let scouts = athletes.filter(athlete => {
      return athlete.clube_id == teamId;
    })
    return scouts;
  }
}
