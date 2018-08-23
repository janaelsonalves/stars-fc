import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';

/**
 * Generated class for the CanvasCanvasChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canvas-chart',
  templateUrl: 'canvas-chart.html'
})
export class CanvasChartComponent implements AfterViewInit {

  id: any = "canvas";
  chart: Chart;
  barChart: Chart;

  @ViewChild("canvas") canvas: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.id);
    this.barChart = new Chart('bar-chart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            data: [34, 23, 89],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: [12, 15, 56],
            borderColor: '#ffcc00',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false,
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
            }
          ]
        }
      }
    })
  }



  /* @Input() id;
  @Input() context: any;
  @Input() type: any;
  @Input() data: any;
  @Input() options?: any;
  @Input() width?: any;
  @Input() height?: any;
  
  _size: number;
  chart: Chart;
  
  @ViewChild("canvas") canvas: ElementRef;
  
  
  constructor() {
    console.log('Hello CanvasCanvasChartComponent Component');
    console.log(this.id);
    this._size = 150;
  }
  
  ngAfterViewInit() {
    //this.context = this.canvas.nativeElement.getContext("2d");
    this.context = this.id;
    this.chart = this.getCchartModel();
  }
  
  get size() {
    return this._size;
  }
  
  @Input() set size(newValue: number) {
    this._size = Math.floor(newValue);
  }
  
  createChart() {
    return new Chart(this.context, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  } */

  getCchartModel(): Chart {
    return new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
