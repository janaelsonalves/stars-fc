import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsPage } from './stats';
import { ChartComponent } from '../../components/chart/chart';

@NgModule({
  declarations: [
    StatsPage,
    ChartComponent
  ],
  imports: [
    IonicPageModule.forChild(StatsPage),
  ],
})
export class StatsPageModule {}
