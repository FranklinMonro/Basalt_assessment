/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import environment from '../../';
import { Cities  } from './app.models'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getCities = (): Observable<Cities[]> => {
    return this.httpClient.get<Cities>(`${environment.apiUrl}runninghillapi/sentenceroutes/wordtype`,
    { observe: 'response' }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => { throw new Error(err.message); }),
    )
  }
}
