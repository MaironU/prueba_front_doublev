import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiRoot;

  constructor(private http: HttpClient) {
    this.apiRoot = 'https://api.github.com';
  }

  get(endpoint: string) {
    let apiUrl = `${this.apiRoot}/${endpoint}`;
    return this.http.get(apiUrl)
              .toPromise()
  }

  getObservable(endpoint: string): Observable<any>{
    let apiUrl = `${this.apiRoot}/${endpoint}`;
    return this.http.get(apiUrl)
      .pipe(
          map(res => {
            console.log("el res", res)
              return res;
          })
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return Swal.fire({
      icon: 'error',
      title: 'Lo sentimos',
      text: error.error.message,
    })
  }
}
