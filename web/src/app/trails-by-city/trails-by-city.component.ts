import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cities  } from '../app.models'
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trails-by-city',
  templateUrl: './trails-by-city.component.html',
  styleUrls: ['./trails-by-city.component.scss']
})
export class TrailsByCityComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;
  
  cities: Cities[] | undefined

  loader: boolean = false;
  
  constructor(private appService: AppService) {}
  
  ngOnInit(): void {
  }

  getCitiesList = (): void => {
    
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
