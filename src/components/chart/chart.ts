import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';

/**
 * Generated class for the ChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements AfterViewInit {

  @Input() canvasId: string;

  @Input() chartType: Chart.ChartType | string;
  @Input() chartData: Chart.ChartData;
  @Input() chartOptions: Chart.ChartOptions;

  @ViewChild('canvasRef') canvasRef: ElementRef;

  barChart: Chart;
  progressBar: any;

  constructor() {
    console.log('Hello ChartComponent Component');
  }

  ngAfterViewInit() {

    let context = this.canvasId || this.canvasRef.nativeElement.getContext('2d');

    console.log(typeof this.canvasId);
    console.log(typeof context);

    let athletes = [
      ['G', 'A', 'RB', 'FC'],
      [80, 15, 15, -4.5],
      [70, 25, 30, -6],
    ]

    /* this.barChart = new Chart(context, {
      type: 'line',
      data: {
        labels: ['G', 'A', 'RB', 'FC'],
        datasets: [
          {
            label: "Points of Zezo",
            data: [80, 15, 15, -4.5],
            borderColor: '#3cba9f',
            backgroundColor: ['#3cba9f', '#3cba9f', '#3cba9f', '#ff0000'],
            fill: false
          },
          {
            label: "Points of Jão",
            data: [70, 25, 30, -6],
            borderColor: '#ffcc00',
            backgroundColor: ['#ffcc00', '#ffcc00', '#ffcc00', '#ffaa00'],
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontSize: 8,
            fontColor: "#000000"
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true
              }
            },
          ]
        },
        responsive: true
      }
    }); */


    this.barChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: ['G', 'A', 'RB', 'FC'],
        datasets: [
          {
            label: "Points of Zezo",
            data: [80, 15, 15, -4.5],
            borderColor: '#3cba9f',
            backgroundColor: ['#3cba9f', '#3cba9f', '#3cba9f', '#ff0000'],
            fill: false
          },
          {
            label: "Points of Jão",
            data: [70, 25, 30, -6],
            borderColor: '#ffcc00',
            backgroundColor: ['#ffcc00', '#ffcc00', '#ffcc00', '#af0000'],
            fill: false
          }
        ]
      },
      options: {
        animation: {duration: 2000,
					onProgress: function(animation) {
             animation.currentStep / animation.numSteps;             
					},
					onComplete: function() {
						window.setTimeout(function() {
              return 0
						}, 2000);
					}
        },
        legend: {
          display: true,
          labels: {
            fontColor: '#000000'
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true
              }
            },
          ]
        },
        responsive: true
      }
    });
  }
}
