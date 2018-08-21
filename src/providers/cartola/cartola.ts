import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../../pages/matches/match.model';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  private apiProxy = '/cartola';

  constructor(private http: HttpClient) {
    console.log('Hello CartolaProvider Provider');
  }

  getMatches() {
    return this.http.get(`${this.apiProxy}/partidas`);
  }

  getAllData(){
    return this.http.get(`${this.apiProxy}/atletas/mercado`);
  }

  getJsonUsers(){
    return this.http.get('/jsonapi/users');
  }
}
