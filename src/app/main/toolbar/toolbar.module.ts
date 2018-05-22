import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngToolbarComponent } from 'app/main/toolbar/toolbar.component';
import { JasAngSearchBarModule } from 'JasAng/components';

@NgModule({
    declarations: [
        JasAngToolbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,

        JasAngSharedModule,
        JasAngSearchBarModule
    ],
    exports     : [
        JasAngToolbarComponent
    ]
})
export class JasAngToolbarModule
{
}
