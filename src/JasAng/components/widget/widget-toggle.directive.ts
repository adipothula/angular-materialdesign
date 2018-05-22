import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[jasAngWidgetToggle]'
})
export class JasAngWidgetToggleDirective
{
    constructor(public el: ElementRef)
    {
    }
}
