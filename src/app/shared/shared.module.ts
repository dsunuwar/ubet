import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// custom components
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
    declarations: [DropdownListComponent, ProgressBarComponent],
    imports: [NgbDropdownModule, CommonModule],
    exports: [DropdownListComponent, ProgressBarComponent]
})
export class SharedModule {}
