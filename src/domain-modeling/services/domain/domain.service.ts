import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DomainSummary, BoundedContextSummary } from '../../models';

export class DomainService {
  public getDomains(): Observable<DomainSummary[]> {
    return Observable.of([
      <DomainSummary> {
        id: '1',
        name: 'Questionable'
      }
    ]);
  }

  public getBoundedContexts(domainId: string): Observable<BoundedContextSummary[]> {
    return Observable.of([
      <BoundedContextSummary> {
        id: '1',
        name: 'Questions'
      }
    ]);
  }
}
