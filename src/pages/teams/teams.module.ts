import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';

import { TeamsPage } from './teams';

@NgModule({
  declarations: [
    TeamsPage
  ],
  imports: [
    IonicPageModule.forChild(TeamsPage),
    ComponentsModule
  ],
})
export class TeamsPageModule {}
