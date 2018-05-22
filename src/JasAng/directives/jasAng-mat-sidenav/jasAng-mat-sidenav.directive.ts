import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { JasAngMatchMediaService } from 'JasAng/services/match-media.service';
import { JasAngMatSidenavHelperService } from 'JasAng/directives/jasAng-mat-sidenav/jasAng-mat-sidenav.service';

@Directive({
    selector: '[jasAngMatSidenavHelper]'
})
export class JasAngMatSidenavHelperDirective implements OnInit, OnDestroy {
    matchMediaSubscription: Subscription;
    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;
    @Input('jasAngMatSidenavHelper') id: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private jasAngMatSidenavService: JasAngMatSidenavHelperService,
        private jasAngMatchMedia: JasAngMatchMediaService,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    ) {
    }

    ngOnInit() {
        this.jasAngMatSidenavService.setSidenav(this.id, this.matSidenav);

        if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }

        this.matchMediaSubscription = this.jasAngMatchMedia.onMediaChange.subscribe(() => {
            if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.toggle(true);
            }
            else {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.toggle(false);
            }
        });
    }

    ngOnDestroy() {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[jasAngMatSidenavToggler]'
})
export class JasAngMatSidenavTogglerDirective {
    @Input('jasAngMatSidenavToggler') id;

    constructor(private jasAngMatSidenavService: JasAngMatSidenavHelperService) {
    }

    @HostListener('click')
    onClick() {
        this.jasAngMatSidenavService.getSidenav(this.id).toggle();
    }
}
