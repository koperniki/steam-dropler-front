import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { IDropConfig, DropConfig } from './models/drop-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropConfigService {

  readonly handler: string = "drop-config";

  constructor(private requester: RequesterService) { }

  public GetConfigList(): Observable<IDropConfig[]> {
    return this.requester.Request(this.handler, "list", {});
  }

  public AddConfig(config: DropConfig): Observable<IDropConfig> {
    return this.requester.Request(this.handler, "add", config);
  }
}
