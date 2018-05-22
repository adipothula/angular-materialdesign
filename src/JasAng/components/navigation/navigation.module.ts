import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { JasAngNavigationComponent } from './navigation.component';
import { JasAngNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { JasAngNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { JasAngNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { JasAngNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { JasAngNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        JasAngNavigationComponent
    ],
    declarations: [
        JasAngNavigationComponent,
        JasAngNavVerticalGroupComponent,
        JasAngNavVerticalItemComponent,
        JasAngNavVerticalCollapseComponent,
        JasAngNavHorizontalItemComponent,
        JasAngNavHorizontalCollapseComponent
    ]
})
export class JasAngNavigationModule
{
}
