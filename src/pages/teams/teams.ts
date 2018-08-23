import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';
import { WeatherProvider } from '../../providers/weather/weather';


/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  barChart: Chart;
  dailyForecast: any;

  @ViewChild("myCanvas") myCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weather: WeatherProvider) {


    let context = this.barChart;

    this.weather.getDailyForecast()
      .subscribe(res => {

        let maxTemps = res['list'].map(res => res.main.temp_min);
        let minTemps = res['list'].map(res => res.main.temp_min);
        let dates = res['list'].map(res => res.dt);

        let weatherDates = dates.map(res => {
          return new Date(res * 1000).toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' });
        });

        this.barChart = new Chart('bar-chart', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: maxTemps,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: minTemps,
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

      });
  }

  createChart(context, type, data, options) {
    return new Chart(context, {
      type: type,
      data: data,
      options: options
    });
  }

  getChartOptions(displayLegend: boolean = false, displayXAxes: boolean = true, displayYAxes: boolean = true, beginAtZero: boolean = true) {
    return {
      legend: {
        display: displayLegend,
      },
      scales: {
        xAxes: [
          {
            display: displayXAxes,
          }
        ],
        yAxes: [
          {
            display: displayYAxes,
            beginAtZero: beginAtZero,
          }
        ]
      }
    }
  }

  getChartData(labels, dataSets) {
    return {
      labels: labels,
      datasets: dataSets,
    }
  }

  ionViewDidLoad() {

  }

}
