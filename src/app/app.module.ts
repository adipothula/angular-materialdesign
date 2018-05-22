import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { JasAngModule } from 'JasAng/JasAng.module';
import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngConfig } from './JasAng-config';

import { AppComponent } from './app.component';
import { JasAngFakeDbService } from './JasAng-fake-db/JasAng-fake-db.service';
import { JasAngMainModule } from './main/main.module';

const appRoutes: Routes = [
    {
        path: 'components',
        loadChildren: './main/content/components/components.module#JasAngComponentsModule'
    },
    {
        path: 'components-third-party',
        loadChildren: './main/content/components-third-party/components-third-party.module#JasAngComponentsThirdPartyModule'
    },
    {
        path: '**',
        redirectTo: 'components-third-party/datatables/ngx-datatable'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(JasAngFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // JasAng Main and Shared modules
        JasAngModule.forRoot(JasAngConfig),
        JasAngSharedModule,
        JasAngMainModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
