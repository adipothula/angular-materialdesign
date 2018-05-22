import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngNavbarComponent } from 'app/main/navbar/navbar.component';
import { JasAngNavigationModule } from 'JasAng/components';

@NgModule({
    declarations: [
        JasAngNavbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,

        JasAngSharedModule,
        JasAngNavigationModule
    ],
    exports     : [
        JasAngNavbarComponent
    ]
})
export class JasAngNavbarModule
{
}
