export class Dataset {
  blockNumber: string;
  timeStamp: string;
  timeString: string;
  dateString: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  hash: string;
  value: string;
  gas: string;
  gasPrice: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  transactionIndex: string;
  isError: string;

  constructor(blockNumber: string, timeStamp: string, year: number, hash: string, value: string, confirmations: string) {
     this.blockNumber = blockNumber;
     this.timeStamp = timeStamp;
     this.year = year;
     this.hash = hash;
     this.value = value;
     this.confirmations = confirmations;
  }
}
