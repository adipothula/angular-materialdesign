import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { JasAngSharedModule } from 'JasAng/shared.module';
import { JasAngNavigationModule, JasAngSearchBarModule, JasAngSidebarModule } from 'JasAng/components';

import { JasAngContentModule } from 'app/main/content/content.module';
import { JasAngFooterModule } from 'app/main/footer/footer.module';
import { JasAngNavbarModule } from 'app/main/navbar/navbar.module';
import { JasAngToolbarModule } from 'app/main/toolbar/toolbar.module';

import { JasAngMainComponent } from './main.component';


@NgModule({
    declarations: [
        JasAngMainComponent,
    ],
    imports: [
        RouterModule,

        MatSidenavModule,

        JasAngSharedModule,
        JasAngNavigationModule,
        JasAngSearchBarModule,
        JasAngSidebarModule,

        JasAngContentModule,
        JasAngFooterModule,
        JasAngNavbarModule,
        JasAngToolbarModule,
    ],
    exports: [
        JasAngMainComponent
    ]
})
export class JasAngMainModule {
}
