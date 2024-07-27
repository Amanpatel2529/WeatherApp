import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  apiKey = 'dabb7b8df5cc09a8bad6301d33fa50ad';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

  loadWeather(city: string): Observable <any> {
  return this.http.get(`${this.apiUrl}q=${city}&APPID=${this.apiKey}`);
  }
}


// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=dabb7b8df5cc09a8bad6301d33fa50ad