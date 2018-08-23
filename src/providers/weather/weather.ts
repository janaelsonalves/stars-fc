import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  private api = "/weather";

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getDailyForecast() {
    return this.http.get(`${this.api}/data/2.5/history/city?q=London,UK&appid=b1b15e88fa797225412429c1c50c122a1`);
  }
}
