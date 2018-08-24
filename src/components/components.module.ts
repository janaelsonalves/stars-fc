import { NgModule } from '@angular/core';
import { CircleComponent } from './circle/circle';
import { ChartComponent } from './chart/chart';

@NgModule({
	declarations: [
		CircleComponent,
		ChartComponent
	],
	imports: [],
	exports: [
		CircleComponent,
		ChartComponent
	]
})
export class ComponentsModule { }
