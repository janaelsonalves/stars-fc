import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsTeamPage } from './stats-team';

@NgModule({
  declarations: [
    StatsTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(StatsTeamPage),
  ],
})
export class StatsTeamPageModule {}
