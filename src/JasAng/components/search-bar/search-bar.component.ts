import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { JasAngConfigService } from 'JasAng/services/config.service';

@Component({
    selector   : 'jasAng-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : ['./search-bar.component.scss']
})
export class JasAngSearchBarComponent
{
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onConfigChanged: Subscription;

    constructor(
        private jasAngConfig: JasAngConfigService
    )
    {
        this.collapsed = true;
        this.onConfigChanged =
            this.jasAngConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }

}
