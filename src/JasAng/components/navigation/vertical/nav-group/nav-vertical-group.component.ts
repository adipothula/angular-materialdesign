import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'jasAng-nav-vertical-group',
    templateUrl: './nav-vertical-group.component.html',
    styleUrls  : ['./nav-vertical-group.component.scss']
})
export class JasAngNavVerticalGroupComponent
{
    @HostBinding('class') classes = 'nav-group nav-item';
    @Input() item: any;

    constructor()
    {
    }

}
