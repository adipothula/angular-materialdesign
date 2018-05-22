import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'jasAng-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class JasAngNavigationComponent
{
    @Input() layout = 'vertical';
    @Input() navigation: any;

    constructor()
    {

    }
}
