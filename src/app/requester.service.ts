import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {Result} from './models/result';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient, private toaster: ToasterService) { }

  public Request<T>(handler: string, method: string, params: any) : Observable<T> {

    var resp =  this.http.post<Result<T>>("http://localhost:5000/api/"+handler+"/"+method, params);
    let ret = new Observable<T>((observer) => {
        resp.subscribe((t)=> {
          if (!t.error){
            observer.next(t.result);
            observer.complete();
          } else {
            this.toaster.showError(t.error);
            observer.complete();
          }
          return {unsubscribe() {}};
        });
    });
    
    return ret;
    
  }

}
