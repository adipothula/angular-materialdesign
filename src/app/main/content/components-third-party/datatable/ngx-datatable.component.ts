import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'jasAng-ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.scss']
})
export class JasAngNgxDatatableComponent implements OnInit {
    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('api/contacts-contacts')
            .subscribe((contacts: any) => {
                this.rows = contacts;
                this.loadingIndicator = false;
            });
    }
}
