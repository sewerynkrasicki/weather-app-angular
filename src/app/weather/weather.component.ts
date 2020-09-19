import { HttpBackend } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WebRequestService } from '../services/web-request.service';
import { WeatherInformation } from '../models/weather';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weatherSearch: string;
  weather: WeatherInformation = {} as WeatherInformation;
  celsius = true;

  constructor(public webRequest: WebRequestService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.weatherSearch.currentValue !== undefined){
      if (!this.celsius){
        const cels =  document.getElementsByClassName('temp-f')[0];
        cels.className = 'temp-c';
        this.weather.temperature = Math.round((this.weather.temperature - 32) * 5 / 9);
        this.celsius = true;
        this.searchInformations(changes.weatherSearch.currentValue);
      }else{
        this.searchInformations(changes.weatherSearch.currentValue);
      }
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
        temperature: Math.round(res.main.temp),
        date: `${new Date().toLocaleString()}`
      };
      this.weather = newWheater;
      console.log(this.weather);
    });
  }

  changeTemperature(): void{
    if (!this.celsius){
      const cels =  document.getElementsByClassName('temp-f')[0];
      cels.className = 'temp-c';
      this.weather.temperature = Math.round((this.weather.temperature - 32) * 5 / 9);
      this.celsius = true;
    }else{
      const cels =  document.getElementsByClassName('temp-c')[0];
      cels.className = 'temp-f';
      this.weather.temperature = Math.round(this.weather.temperature * 9 / 5 + 32);
      this.celsius = false;
    }
  }





}
