import { Component, OnInit, Input  } from '@angular/core';
import { DatasetService } from '../dataset.service';
import { Data } from "../data";
import { Router, NavigationExtras } from '@angular/router';
import { Dataset } from '../dataset';
import { History } from '../history';

@Component({
  selector: 'app-probe',
  templateUrl: './probe.component.html',
  styleUrls: ['./probe.component.css']
})
export class ProbeComponent implements OnInit {
    @Input() className :any;
    history: History;
    historyList: History[] = [];
    selectedHistory: History;
    total : any = "Loading...";
    logType: any;
    constructor(private router: Router, private datasetService: DatasetService, private data: Data) { }


  ngOnInit() {
     this.datasetService.getProbeList()
                      .then((historyList) => {
                          this.historyList = historyList;
                          this.total = this.historyList.length;
                      });
  }

  onRowSelect(event) {   
        var datasetName = this.selectedHistory.dataSet;
        var appName = this.selectedHistory.application;
        var list = this.data.storage.datasetList as Dataset[];

        this.router.navigate(["/details"]);
  }

}
