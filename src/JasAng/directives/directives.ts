import { NgModule } from '@angular/core';

import { JasAngIfOnDomDirective } from 'JasAng/directives/jasAng-if-on-dom/jasAng-if-on-dom.directive';
import { JasAngPerfectScrollbarDirective } from 'JasAng/directives/jasAng-perfect-scrollbar/jasAng-perfect-scrollbar.directive';
import { JasAngMatSidenavHelperDirective, JasAngMatSidenavTogglerDirective } from 'JasAng/directives/jasAng-mat-sidenav/jasAng-mat-sidenav.directive';

@NgModule({
    declarations: [
        JasAngIfOnDomDirective,
        JasAngMatSidenavHelperDirective,
        JasAngMatSidenavTogglerDirective,
        JasAngPerfectScrollbarDirective
    ],
    imports: [],
    exports: [
        JasAngIfOnDomDirective,
        JasAngMatSidenavHelperDirective,
        JasAngMatSidenavTogglerDirective,
        JasAngPerfectScrollbarDirective
    ]
})
export class JasAngDirectivesModule {
}
