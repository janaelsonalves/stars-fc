import { NgModule } from '@angular/core';
import { CircleComponent } from './circle/circle';
import { CanvasChartComponent } from './canvas-chart/canvas-chart';
import { ChartComponent } from './chart/chart';

@NgModule({
	declarations: [
		CircleComponent,
		CanvasChartComponent,
		ChartComponent
	],
	imports: [],
	exports: [
		CircleComponent,
		CanvasChartComponent,
		ChartComponent
	]
})
export class ComponentsModule { }
