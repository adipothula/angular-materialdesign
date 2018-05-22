import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { JAS_ANG_CONFIG, JasAngConfigService } from 'JasAng/services/config.service';
import { JasAngCopierService } from 'JasAng/services/copier.service';
import { JasAngMatchMediaService } from 'JasAng/services/match-media.service';
import { JasAngMatSidenavHelperService } from 'JasAng/directives/jasAng-mat-sidenav/jasAng-mat-sidenav.service';
import { JasAngNavigationService } from 'JasAng/components/navigation/navigation.service';
import { JasAngSidebarService } from 'JasAng/components/sidebar/sidebar.service';
import { JasAngSplashScreenService } from 'JasAng/services/splash-screen.service';
import { JasAngTranslationLoaderService } from 'JasAng/services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers      : [
        JasAngConfigService,
        JasAngCopierService,
        JasAngMatchMediaService,
        JasAngMatSidenavHelperService,
        JasAngNavigationService,
        JasAngSidebarService,
        JasAngSplashScreenService,
        JasAngTranslationLoaderService
    ]
})
export class JasAngModule
{
    constructor(@Optional() @SkipSelf() parentModule: JasAngModule)
    {
        if ( parentModule )
        {
            throw new Error('JasAngModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : JasAngModule,
            providers: [
                {
                    provide : JAS_ANG_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
