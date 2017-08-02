import { Component, OnInit, Input } from '@angular/core';
import { History } from '../history';
import { DatasetService } from '../dataset.service';
import { Router, NavigationExtras } from '@angular/router';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
    data: any = {};
   
    constructor() { }

    ngOnInit() {
        var label =  JSON.parse(localStorage.getItem("keylabel")) as String[];
        var value =  JSON.parse(localStorage.getItem("keyvalue")) as Number[];
        
        var data1: any = {};
        data1.label = 'EOS';
        data1.data = [];
        data1.data = value.slice();
        data1.fill = false;
        data1.borderColor = '#4bc0c0';
        this.data.labels = label;
        this.data.datasets = [];
        this.data.datasets.push(data1);

        console.log(this.data);
    }

}
