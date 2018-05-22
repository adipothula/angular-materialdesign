import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';

@NgModule({
    declarations: [
        KeysPipe,
        HtmlToPlaintextPipe,
    ],
    imports: [],
    exports: [
        KeysPipe,
        HtmlToPlaintextPipe,
    ]
})
export class JasAngPipesModule {
}
