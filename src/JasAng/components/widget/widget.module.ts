import { NgModule } from '@angular/core';

import { JasAngWidgetComponent } from './widget.component';
import { JasAngWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        JasAngWidgetComponent,
        JasAngWidgetToggleDirective
    ],
    exports     : [
        JasAngWidgetComponent,
        JasAngWidgetToggleDirective
    ],
})
export class JasAngWidgetModule
{
}
