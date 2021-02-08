import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/helpers/interfaces/IWeather';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.css']
})
export class WeatherCardsComponent {
  @Input() weatherInfo: IWeather;
}
