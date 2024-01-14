import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cities, Trails  } from '../app.models'
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatSelectChange } from '@angular/material/select';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss']
})
export class WeatherByCityComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;

  citiesList: Cities[] | undefined;
  
  weather: Trails[] | undefined;

  loader: boolean = false;

  constructor(
    private appService: AppService,
    private toastr: ToastrService,
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

  getTrailsForCity = (event: MatSelectChange): void => {
    const { name } = event.value as Cities;
    this.loader = true;
    this.subcription = this.appService.getWeather(name!).subscribe({
      next: (res) => {
        console.log(res);
        this.weather = res;
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

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
