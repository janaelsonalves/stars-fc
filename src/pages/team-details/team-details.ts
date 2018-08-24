import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { updateImgs } from 'ionic-angular/components/content/content';
import { Img } from 'ionic-angular/components/img/img-interface';

import { POSITIONS } from '../../models/mock-data/position.data.const';
import { SCOUTS } from '../../models/mock-data/scouts.data.const';
import { Position } from '../../models/position.model';

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {

  team: any;
  content: any;
  detailsType: any = "stats";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = navParams.get('data');
    this.team.athletes.sort(this.compareAthleteByMedia);
    console.log(this.getAllTeamScouts());

  }

  ionViewDidLoad() {
    if (this.content) {
      this.content.imgsUpdate = () => {
        if (this.content._scroll.initialized && this.content._imgs.length && this.content.isImgsUpdatable()) {
          // Reset cached bounds
          this.content._imgs.forEach((img: Img) => (<any>img)._rect = null);

          // Use global position to calculate if an img is in the viewable area
          updateImgs(this.content._imgs, this.content._cTop * -1, this.content.contentHeight, this.content.directionY, 1400, 400);
        }
      };
    }
  }

  getShieldImage(src: string) {
    try {
      return src.replace(/FORMATO/i, '80x80');
    } catch (error) {
      return '../../assets/imgs/round_account_circle_black_48dp.png';
    }
  }

  showDetails(athlete: any) {

  }

  compareAthleteByMedia(a: any, b: any) {
    return a.media_num <= b.media_num ? 1 : -1;
  }

  getPositionById(id) {
    return POSITIONS.find((pos: Position) => pos.id == id);
  }

  getTotalPoints(athlete: any) {
    return (athlete.jogos_num * athlete.media_num);
  }

  getAllTeamScouts() {
    let teamScouts = [];
    this.team.athletes.map(elem => {
      if (!this.isEmpty(elem.scout)) {
        teamScouts.push(elem.scout);
        console.log(this.getArrayObject(elem.scout));        
      }
    })
    return teamScouts;
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  getArrayObject(object) {
    let array = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        array.push({
          type: key,
          quantity: object[key]
        });        
      }
    }
    return array;
  }

  getScouts(){
    SCOUTS.forEach(sc => {
      this.team.athletes.map(

      )
    })
  }

  sumSingleScout(scout){
    let tmpAthletes = this.team.athletes;
    tmpAthletes.forEach(res => {

    })
  }
}
