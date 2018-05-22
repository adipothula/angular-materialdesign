import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatListModule,
    MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { JasAngSharedModule } from 'JasAng/shared.module';

import { JasAngAngularMaterialModule } from './angular-material/angular-material.module';
import { JasAngCardsDocsComponent } from './cards/cards.component';
import { JasAngHighlightModule } from 'JasAng/components';

const routes = [
    {
        path: 'cards',
        component: JasAngCardsDocsComponent
    }
];

@NgModule({
    declarations: [
        JasAngCardsDocsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,
        JasAngHighlightModule,
        NgxChartsModule,
        JasAngSharedModule,
        JasAngAngularMaterialModule
    ]
})
export class JasAngComponentsModule {
}
