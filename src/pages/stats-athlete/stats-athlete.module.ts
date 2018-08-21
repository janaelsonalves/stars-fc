import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsAthletePage } from './stats-athlete';

@NgModule({
  declarations: [
    StatsAthletePage,
  ],
  imports: [
    IonicPageModule.forChild(StatsAthletePage),
  ],
})
export class StatsAthletePageModule {}
