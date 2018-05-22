import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'jasAng-nav-horizontal-item',
    templateUrl: './nav-horizontal-item.component.html',
    styleUrls  : ['./nav-horizontal-item.component.scss']
})
export class JasAngNavHorizontalItemComponent
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;
}
