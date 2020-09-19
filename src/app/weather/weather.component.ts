import { HttpBackend } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WebRequestService } from '../services/web-request.service';

export class WeatherInformation{
  condition: any;
  country: any;
  city: any;
  temperature: any;
  date: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weatherSearch: string;
  weather: WeatherInformation = {} as WeatherInformation;

  constructor(public webRequest: WebRequestService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.weatherSearch.currentValue !== undefined){
      this.searchInformations(changes.weatherSearch.currentValue);
    }
  }

  ngOnInit(): void {
  }

  searchInformations(weatherSearch: string): void{
    console.log(weatherSearch);
    this.webRequest.getWeather(weatherSearch).subscribe((res: any) => {
      console.log(res);
      const newWheater: WeatherInformation = {
        condition: res.weather[0].main,
        country: res.sys.country,
        city: res.name,
        temperature: res.main.temp,
        date: `${new Date().toLocaleString()}`
      };
      this.weather = newWheater;
      console.log(this.weather);
    });
  }



}
