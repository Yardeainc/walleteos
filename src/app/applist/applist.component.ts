import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';
import { Router, NavigationExtras } from '@angular/router';
import { Data } from "../data";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {

    dataset: Dataset;
    selectedDataset: Dataset;
    datasets: Dataset[] = [];
    total : any = "Loading...";
    text: any;
    value: any = new Date();

    constructor(private router: Router, private datasetService: DatasetService, private data: Data) { }

    ngOnInit() {
        if (!localStorage.getItem("defaultDate")) {
           var d = new Date();
           d.setHours(d.getHours() - 24);
           localStorage.setItem("defaultDate", JSON.stringify(d));
        }

        if (!localStorage.getItem("defaultMax")) {
           localStorage.setItem("defaultMax", "1000");
        }

        var d = new Date();
        d.setHours(d.getHours() - 24);
          
        this.text = localStorage.getItem("defaultMax");
        this.value = d;
       
        this.datasetService.getDatasets(this.value, this.text)
                      .then((datasets) => {
                          this.datasets = [];

                          this.datasets = datasets.sort(function(a, b) {
                              if (a.timeStamp < b.timeStamp) {
                                return 1;
                              }
                              if (a.timeStamp > b.timeStamp) {
                                return -1;
                              }
                              return 0;
                          });

                    
                          this.total = this.datasets.length;
                          
                      });
        
    }

    onRowSelect(event) {   
        // this.data.storage = {
        //     "selectedDataset": this.selectedDataset
        // }
        // this.router.navigate(["/details"]);
    }

     parseLocal(strDate) {
        if (strDate) {
           return (new Date(strDate)).toLocaleString();
        } else {
            return "";
        }      
    }

    onclick() {
        localStorage.setItem("defaultMax", this.text);
        
        this.datasetService.getDatasets(this.value, this.text)
                      .then((datasets) => {
                          this.datasets = [];
                          this.datasets = datasets.slice();
                          this.total = this.datasets.length;

                      });
    }

}

