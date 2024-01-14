import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cities  } from '../app.models'
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trails-by-city',
  templateUrl: './trails-by-city.component.html',
  styleUrls: ['./trails-by-city.component.scss']
})
export class TrailsByCityComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;
  
  cities: Cities[] | undefined

  loader: boolean = false;
  
  constructor(
    private appService: AppService,
    private toastr: ToastrService,
  ) {}
  
  ngOnInit(): void {
  }

  getCitiesList = (): void => {
    this.subcription = this.appService.getCities().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err: ErrorEvent) => {
        this.toastr.error(err.message, 'ERROR', {
          timeOut: 3000,
        });
      },
      complete: () => {

      }
    })
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
