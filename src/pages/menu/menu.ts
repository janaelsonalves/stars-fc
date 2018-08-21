import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Page{
  title: string;
  name: string;
  component?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;


  rootPage: any = 'TabsPage';

  pages: Page [] = [
    {title: 'All Stats',  name: 'Stats', component: 'StatsPage', icon: 'stats'},
    {title: 'Athlete Stats',  name: 'Athlete', component: 'StatsAthletePage', icon: 'person'},
    {title: 'Team Stats',  name: 'Team', component: 'StatsTeamPage', icon: 'people'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    console.log(this.pages)
  }

  openPage(page: Page){
    this.rootPage = page.component;
    console.log(page.component)
  }
}
