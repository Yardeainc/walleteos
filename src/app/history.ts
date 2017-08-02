export class History {
  dataSet: string;
  application: string;
  interval: number;
  message: string;
  type: string;
  __ModifiedOn: string;
  host: string;
  

  constructor(dataSet: string, application: string, interval: number, message: string, type: string, __ModifiedOn: string, host:string) {
     this.dataSet = dataSet;
     this.application = application;
     this.interval = interval;
     this.message = message;
     this.__ModifiedOn = __ModifiedOn;
     this.host = host;
  }
}
