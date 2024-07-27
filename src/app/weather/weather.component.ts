import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherInformation: any;
  city : string = '';
  
  constructor(private weatherService: WeatherService){ }


  ngOnInit():void{
    
    this.weatherService.loadWeather(this.city).subscribe(data => {
      this.weatherInformation = data;
    });
  }


  getWeather(){
    this.weatherService.loadWeather(this.city).subscribe(data => {
      this.weatherInformation = data;
    })
  }
}



