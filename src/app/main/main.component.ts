import { Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { JasAngConfigService } from 'JasAng/services/config.service';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector: 'jasAng-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class JasAngMainComponent implements OnDestroy {
    onConfigChanged: Subscription;
    JasAng: any;
    navigation: any;

    @HostBinding('attr.jasAng-layout-mode') layoutMode;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private jasAngConfig: JasAngConfigService,
        private platform: Platform,
        @Inject(DOCUMENT) private document: any
    ) {
        this.onConfigChanged =
            this.jasAngConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.JasAng = newSettings;
                        this.layoutMode = this.JasAng.layout.mode;
                    }
                );

        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }

        this.navigation = navigation;
    }

    ngOnDestroy() {
        this.onConfigChanged.unsubscribe();
    }

    addClass(className: string) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
