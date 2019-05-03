import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { IDropConfig, DropConfig } from './models/drop-config';
import { Observable } from 'rxjs';
import { SetDropConfig } from './models/set-drop-config';

@Injectable({
  providedIn: 'root'
})
export class DropConfigService {

  readonly handler: string = "drop-config";

  constructor(private requester: RequesterService) { }

  public GetConfigList(): Observable<IDropConfig[]> {
    return this.requester.Request(this.handler, "list", {});
  }

  public GetConfigByApp(uintId: number): Observable<IDropConfig[]> {
    return this.requester.Request(this.handler, "list_by_app", {uintId});
  }

  public AddConfig(config: DropConfig): Observable<IDropConfig> {
    return this.requester.Request(this.handler, "add", config);
  }
  
  public SetDropConfig(config: SetDropConfig): Observable<boolean> {
    return this.requester.Request(this.handler, "set_config", config);
  }
  public SetDropConfigAll(config: SetDropConfig): Observable<boolean> {
    return this.requester.Request(this.handler, "set_config_all", config);
  }

}
