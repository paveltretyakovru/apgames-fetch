import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

export interface Element {
  position: Number;
  date: string;
  traffic: Number;
  accepted: Number;
  inProcessing: Number;
  rejected: Number;
  accrued: Number;
  potentially: Number;
  conversion: string;
  epc: Number;
}

const data: Element[] = [
  { position: 1, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 2, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 3, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 4, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 5, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 6, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 7, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 8, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 9, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 10, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 11, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 12, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
  { position: 13, date: '19.08.2017', traffic: 78, accepted: 5, inProcessing: 0, rejected: 0, accrued: 4700.00, potentially: 0, conversion: '1:16', epc: 60.26 },
];