import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngFooterComponent } from 'app/main/footer/footer.component';

@NgModule({
    declarations: [
        JasAngFooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        JasAngSharedModule
    ],
    exports     : [
        JasAngFooterComponent
    ]
})
export class JasAngFooterModule
{
}
