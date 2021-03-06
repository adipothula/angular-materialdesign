import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { JasAngSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        JasAngSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        JasAngSearchBarComponent
    ]
})
export class JasAngSearchBarModule
{
}
