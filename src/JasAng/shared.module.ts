import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { JasAngDirectivesModule } from 'JasAng/directives/directives';
import { JasAngPipesModule } from 'JasAng/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        JasAngDirectivesModule,
        JasAngPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        JasAngDirectivesModule,
        JasAngPipesModule
    ]
})
export class JasAngSharedModule
{
}
