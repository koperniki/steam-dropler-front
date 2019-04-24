import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { INode } from './models/node';



@Injectable({
  providedIn: 'root',
})
export class NodeApiService {

  readonly handler: string = "node";

  constructor(private requester: RequesterService) { }

  public GetNodeList(): Observable<INode[]> {
    return this.requester.Request(this.handler, "list", {});
  }

  public AddNode(node: Node): Observable<INode> {
    return this.requester.Request(this.handler, "add", node);
  }

}
