import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
