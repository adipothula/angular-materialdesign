import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { JasAngSplashScreenService } from 'JasAng/services/splash-screen.service';
import { JasAngTranslationLoaderService } from 'JasAng/services/translation-loader.service';
import { JasAngNavigationService } from 'JasAng/components/navigation/navigation.service';

import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/tr';

@Component({
    selector: 'jasAng-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private translate: TranslateService,
        private jasAngNavigationService: JasAngNavigationService,
        private jasAngSplashScreen: JasAngSplashScreenService,
        private jasAngTranslationLoader: JasAngTranslationLoaderService
    ) {
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Set the navigation translations
        this.jasAngTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        this.translate.use('en');
    }
}
