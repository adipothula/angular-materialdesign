import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'app/main/content/components/angular-material/material.module';

import { JasAngSharedModule } from 'JasAng/shared.module';
import { JasAngHighlightModule } from 'JasAng/components';
import { JasAngWidgetModule } from 'JasAng/components/widget/widget.module';

import { EXAMPLE_LIST } from './example-components';
import { JasAngExampleViewerComponent } from './example-viewer/example-viewer';
import { JasAngAngularMaterialComponent } from './angular-material.component';

const routes: Routes = [
    {
        path: 'angular-material',
        children: [
            {
                path: ':id',
                component: JasAngAngularMaterialComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        [...EXAMPLE_LIST],
        JasAngAngularMaterialComponent,
        JasAngExampleViewerComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MaterialModule,

        JasAngSharedModule,
        JasAngHighlightModule,
        JasAngWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class JasAngAngularMaterialModule {
}

