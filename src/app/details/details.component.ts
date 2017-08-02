import { Component, OnInit } from '@angular/core';
import { Data } from "../data";
import { Dataset } from '../dataset';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BreadcrumbModule,MenuItem } from 'primeng/primeng';
import { Router, NavigationExtras } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [
    trigger('expandSection', [
      state('in', style({ height: '*' })),
      transition(':enter', [
        style({ height: 0 }), animate(100),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate(100, style({ height: 0 })),
      ]),
    ]),
  ],
})
export class DetailsComponent implements OnInit {

  selectedDataset: Dataset;
  jsondata: any;
  datasetName: string;
  items: MenuItem[];

  constructor(private data: Data, private router: Router, private sanitizer: DomSanitizer, private _location: Location) { }

  ngOnInit() {
    
    if (this.data.storage && this.data.storage.selectedDataset) {
       this.selectedDataset = this.data.storage.selectedDataset as Dataset;

       this.data.storage = {
            "selectedDataset": this.data.storage.selectedDataset,
            "datasetList": this.data.storage.datasetList
       }
       
    }
    
  }

  aceEditorOptions: any = {
    highlightActiveLine: false,
    maxLines: 1000,
    printMargin: false,
    autoScrollEditorIntoView: true,
  };

  handleChange(e) {
    // var index = e.index;
    // if (index === 1) {
    //   this.router.navigate(['historylist']);
    // }
  }

}
