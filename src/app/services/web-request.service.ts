import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  API_KEY = 'YOUR-API-KEY';
  ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';


  constructor(public http: HttpClient) { }

  getWeather(city: string): Observable<object>{
    return this.http.get(`${this.ROOT_URL}${city}&appid=${this.API_KEY}`);
  }
}
