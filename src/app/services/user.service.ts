import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private api: ApiService) {
  }

  filterUser(endpoint: string, word: string) {
      let apiUrl = `${endpoint}?q=${word}`;
      return this.api.get(apiUrl)
  }

  filterUserObservable(endpoint: string, word: string): Observable<any> {
    let apiUrl = `${endpoint}?q=${word}`;
    return this.api.getObservable(apiUrl)
  }

  getUserByLogin(endpoint: string, login: string){
    let apiUrl = `${endpoint}/${login}`;
    console.log(apiUrl)
    return this.api.getObservable(apiUrl)
  }
}
