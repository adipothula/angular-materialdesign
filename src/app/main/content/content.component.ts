import { Component, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { jasAngAnimations } from 'JasAng/animations/index';
import { JasAngConfigService } from 'JasAng/services/config.service';

@Component({
    selector   : 'jasAng-content',
    templateUrl: './content.component.html',
    styleUrls  : ['./content.component.scss'],
    animations : jasAngAnimations
})
export class JasAngContentComponent implements OnDestroy
{
    onConfigChanged: Subscription;
    JasAng: any;

    @HostBinding('@routerTransitionUp') routeAnimationUp = false;
    @HostBinding('@routerTransitionDown') routeAnimationDown = false;
    @HostBinding('@routerTransitionRight') routeAnimationRight = false;
    @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
    @HostBinding('@routerTransitionFade') routeAnimationFade = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private jasAngConfig: JasAngConfigService
    )
    {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute)
        ).subscribe((event) => {
            switch ( this.JasAng.routerAnimation )
            {
                case 'fadeIn':
                    this.routeAnimationFade = !this.routeAnimationFade;
                    break;
                case 'slideUp':
                    this.routeAnimationUp = !this.routeAnimationUp;
                    break;
                case 'slideDown':
                    this.routeAnimationDown = !this.routeAnimationDown;
                    break;
                case 'slideRight':
                    this.routeAnimationRight = !this.routeAnimationRight;
                    break;
                case 'slideLeft':
                    this.routeAnimationLeft = !this.routeAnimationLeft;
                    break;
            }
        });

        this.onConfigChanged =
            this.jasAngConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.JasAng = newSettings;
                    }
                );
    }

    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
    }
}
