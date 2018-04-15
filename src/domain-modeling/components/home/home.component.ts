import { Component, Injectable, OnInit } from '@angular/core';
import { DomainService } from '../../services';
import { DomainSummary } from '../../models';

@Component({
    selector: 'app-home',
    styleUrls: ['home.component.scss'],
    templateUrl: 'home.component.html'
})
@Injectable()
export class HomeComponent implements OnInit {

    public domains: DomainSummary[];
    public selectedDomain: string;

    public contexts: DomainSummary[];
    public selectedContext: string;

    constructor(
      private domainService: DomainService
    ) {}

    public ngOnInit(): void {
      this.domainService.getDomains()
        .subscribe(x => this.domains = x);
    }

    private onDomainSelected(event: any) {
      this.contexts = [];
      this.domainService.getBoundedContexts(this.selectedContext)
        .subscribe(x => this.contexts = x);
    }
}
