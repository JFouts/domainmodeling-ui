import { Component, Input } from '@angular/core';
import { Term } from '../../models';

@Component({
  selector: 'app-terms',
  styleUrls: ['terms.component.scss'],
  templateUrl: 'terms.component.html'
})
export class TermsComponent {
  @Input()
  public terms: Term[] = [];
}
