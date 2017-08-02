import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dataset } from './dataset';
import { Application } from './application';
import { Data } from "./data";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { TreeModule,TreeNode } from 'primeng/primeng';

@Injectable()
export class DatasetService {
    
  
    constructor(private http: Http, private data: Data) { 
    }
  
    aggregatorurl: string;
  
    historyUrl: string;
    probeUrl: string;
   
    private configs: Dataset[]=[];
    private historyList: History[];

    getDatasets(tryDate: any, tryMax: any): Promise<any> {
       this.setUrls(tryMax);
       return this.http.get(this.aggregatorurl)
             .toPromise()
             .then((response) => {
                this.configs = [];
                var result = response.json().result;
                localStorage.setItem("json", JSON.stringify(result));
                for (let element of result) {
                    var ds =  element as Dataset;
                    if (ds.isError === '0'){
                        var date = new Date(Number(ds.timeStamp) * 1000);
                        if (date < tryDate) break;
                        ds.timeString = date.toLocaleString();
                        ds.dateString = date.toDateString();
                        ds.hour = date.getHours();
                        ds.minute = date.getMinutes();
                        ds.second = date.getSeconds();
                        ds.value = (Number(ds.value)/1000000000000000000).toString();
                        this.configs.push(ds);
                    }   
                };

                var temp: Dataset[] = [];
                temp = this.configs.sort(function(a, b) {
                   if (a.timeStamp < b.timeStamp) {
                       return -1;
                   }
                   if (a.timeStamp > b.timeStamp) {
                       return 1;
                   }
                   return 0;
                });
                var label:String[] = [];
                var value:Number[] = [];
                var total = 0;
                var dateString = '';
                var hour = 99;
                var minute = 99;
                var second = 99;
                var init = true;
                temp.forEach(element => {
                    var ds =  element as Dataset;
                    console.log(ds.hour);
                    if (init){
                       dateString = ds.dateString;
                       hour = ds.hour;
                    }              
                    if (ds.dateString == dateString && ds.hour == hour){
                        init = false;
                        total = total + Number(ds.value);
                    } else {
                        label.push(hour.toString());
                        value.push(Math.round(total));
                        dateString = ds.dateString;
                        hour = ds.hour;
                    }
                });
                
                localStorage.setItem("keylabel", JSON.stringify(label));
                localStorage.setItem("keyvalue", JSON.stringify(value));
                console.log(this.configs.length);
                return this.configs;
             })
             .catch(this.handleError);
    }

    getHistoryList(className: any): Promise<any> {
       var filter = "";
       if (className) {
          filter = "&$filter=dataSet%20eq%20%27" + className +  "%27";
       }
       return this.http.get(this.historyUrl + filter)
             .toPromise()
             .then((response) => {
                this.historyList = response.json().value;
                return this.historyList;
             })
             .catch(this.handleError);
    }

    getProbeList(): Promise<any> {

       return this.http.get(this.probeUrl)
             .toPromise()
             .then((response) => {
                this.historyList = response.json().value;
                return this.historyList;
             })
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    parseLocal(strDate) {
        if (strDate) {
           return (new Date(strDate)).toLocaleString();
        } else {
            return "";
        }      
    }

    setUrls(tryMax: any) {
        var protocol = window.location.protocol;
        var hostName = window.location.hostname;
        var defaultUrl = "https://api.etherscan.io/api?module=account&action=txlist&address=0xd0a6e6c54dbc68db5db3a091b171a77407ff7ccf";
        this.aggregatorurl = defaultUrl + "&page=1&&sort=desc&offset=" + tryMax;
        
        this.historyUrl = defaultUrl + "/c3api_data/v2/DataAccess.svc/c3api_aggregator_app/History?$top=1000&$format=json&$count=true&$orderby=__ModifiedOn%20desc";
        this.probeUrl = defaultUrl + "/c3api_data/v2/DataAccess.svc/c3api_aggregator_app/History?$top=1000&$format=json&$count=true&$orderby=__ModifiedOn%20desc&$filter=type%20eq%20%27Error%27";
  
    }

}
