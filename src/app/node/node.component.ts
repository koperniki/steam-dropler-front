import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { INode } from '../models/node';
import { NodeApiService } from '../node-api.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'edit'];
  dataSource: MatTableDataSource<INode>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private nodeApi: NodeApiService) { }

  ngOnInit() {
    this.nodeApi.GetNodeList().subscribe(t=>{
      this.dataSource = new MatTableDataSource<INode>(t);
      this.dataSource.paginator = this.paginator;
      console.log(t);
    });
  }

}
