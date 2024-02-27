import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  getConfigs(): Observable<any[]> {
    return this._http.get<any[]>(this.url + '/configs')
  }
}
