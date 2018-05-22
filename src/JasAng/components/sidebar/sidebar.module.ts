import { NgModule } from '@angular/core';

import { JasAngSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        JasAngSidebarComponent
    ],
    exports     : [
        JasAngSidebarComponent
    ]
})
export class JasAngSidebarModule
{
}
