import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// custom components
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
    declarations: [DropdownListComponent, ProgressBarComponent],
    imports: [NgbDropdownModule, CommonModule],
    exports: [DropdownListComponent, ProgressBarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
