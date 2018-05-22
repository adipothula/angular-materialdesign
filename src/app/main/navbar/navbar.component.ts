import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { JasAngPerfectScrollbarDirective } from 'JasAng/directives/jasAng-perfect-scrollbar/jasAng-perfect-scrollbar.directive';
import { JasAngSidebarService } from 'JasAng/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { JasAngNavigationService } from 'JasAng/components/navigation/navigation.service';
import { JasAngSidebarComponent } from 'JasAng/components/sidebar/sidebar.component';

@Component({
    selector: 'jasAng-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class JasAngNavbarComponent implements OnInit, OnDestroy {
    private jasAngPerfectScrollbar: JasAngPerfectScrollbarDirective;

    @ViewChild(JasAngPerfectScrollbarDirective) set directive(theDirective: JasAngPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this.jasAngPerfectScrollbar = theDirective;

        this.navigationServiceWatcher =
            this.navigationService.onItemCollapseToggled.subscribe(() => {
                this.jasAngPerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.jasAngPerfectScrollbar.update();
                }, 310);
            });
    }

    @Input() layout;
    navigation: any;
    navigationServiceWatcher: Subscription;
    jasAngPerfectScrollbarUpdateTimeout;

    constructor(
        private sidebarService: JasAngSidebarService,
        private navigationService: JasAngNavigationService,
        private router: Router
    ) {
        // Navigation data
        this.navigation = navigation;

        // Default layout
        this.layout = 'vertical';
    }

    ngOnInit() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    if (this.sidebarService.getSidebar('navbar')) {
                        this.sidebarService.getSidebar('navbar').close();
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.jasAngPerfectScrollbarUpdateTimeout) {
            clearTimeout(this.jasAngPerfectScrollbarUpdateTimeout);
        }

        if (this.navigationServiceWatcher) {
            this.navigationServiceWatcher.unsubscribe();
        }
    }

    toggleSidebarOpened() {
        this.sidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded() {
        this.sidebarService.getSidebar('navbar').toggleFold();
    }
}
