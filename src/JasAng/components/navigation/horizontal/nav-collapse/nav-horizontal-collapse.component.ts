import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { jasAngAnimations } from '../../../../animations/index';
import { JasAngConfigService } from '../../../../services/config.service';

@Component({
    selector   : 'jasAng-nav-horizontal-collapse',
    templateUrl: './nav-horizontal-collapse.component.html',
    styleUrls  : ['./nav-horizontal-collapse.component.scss'],
    animations : jasAngAnimations
})
export class JasAngNavHorizontalCollapseComponent implements OnDestroy
{
    onConfigChanged: Subscription;
    jasAngSettings: any;
    isOpen = false;

    @HostBinding('class') classes = 'nav-item nav-collapse';
    @Input() item: any;

    @HostListener('mouseenter')
    open()
    {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close()
    {
        this.isOpen = false;
    }

    constructor(
        private jasAngConfig: JasAngConfigService
    )
    {
        this.onConfigChanged =
            this.jasAngConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.jasAngSettings = newSettings;
                    }
                );
    }

    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
    }
}
