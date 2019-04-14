import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }

  public Request<T>(method: string, params: any) : Observable<T> {

    return this.http.post<T>("http://localhost:5000/api/"+method, params);
    
  }

}
