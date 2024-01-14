import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cities, Weather  } from '../app.models'
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss']
})
export class WeatherByCityComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;

  citiesList: Cities[] | undefined;

  weatherForm: FormGroup | undefined

  loader: boolean = false;

  constructor(
    private appService: AppService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getCitiesList();
  }

  getCitiesList = (): void => {
    this.loader = true;
    this.subcription = this.appService.getCities().subscribe({
      next: (res) => {
        this.citiesList = res;
      },
      error: (err: ErrorEvent) => {
        this.toastr.error(err.message, 'ERROR', {
          timeOut: 3000,
        });
        this.loader = false;
      },
      complete: () => {
        this.loader = false;
      }
    });
  };

  getWeatherForCity = (event: MatSelectChange): void => {
    const { city } = event.value as Cities;
    this.loader = true;
    this.subcription = this.appService.getWeather(city!).subscribe({
      next: (res) => {
        console.log(res);
        this.createWeatherForm(res[0]);
      },
      error: (err: ErrorEvent) => {
        this.toastr.error(err.message, 'ERROR', {
          timeOut: 3000,
        });
        this.loader = false;
      },
      complete: () => {
        this.loader = false;
      }
    })
  }

  createWeatherForm = (weather: Weather): void => {
    this.weatherForm = this.formBuilder.group({
      id: [weather.id],
      main: [weather.main],
      description: [weather.description],
      icon: [weather.icon]
    });
  }

  clearForm = (): void => {
    this.weatherForm?.reset();
  }

  onSubmit = (): void => {
    if (this.weatherForm?.invalid) {
      this.toastr.warning('Check Form', 'WARNING', {
        timeOut: 3000,
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
