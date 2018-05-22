import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { JasAngSharedModule } from 'JasAng/shared.module';


import { JasAngNgxDatatableComponent } from './datatable/ngx-datatable.component';

const routes = [
    {
        path: 'datatables/ngx-datatable',
        component: JasAngNgxDatatableComponent
    }
];

@NgModule({
    declarations: [
        JasAngNgxDatatableComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,

        NgxDatatableModule,

        JasAngSharedModule
    ],
})
export class JasAngComponentsThirdPartyModule {
}
