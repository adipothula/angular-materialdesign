import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngContentComponent } from 'app/main/content/content.component';

@NgModule({
    declarations: [
        JasAngContentComponent
    ],
    imports: [
        RouterModule,

        JasAngSharedModule,
    ],
    exports: [
        JasAngContentComponent
    ]
})
export class JasAngContentModule {
}
