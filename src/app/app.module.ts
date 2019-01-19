import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NextRaceComponent } from './next-race/next-race.component';
import { NextRaceService } from './next-race/next-race.service';
import { DropdownListComponent } from './shared/dropdown-list/dropdown-list.component';
import { NextToGoComponent } from './next-to-go/next-to-go.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        NextRaceComponent,
        DropdownListComponent,
        NextToGoComponent,
        ProgressBarComponent
    ],
    imports: [HttpClientModule, BrowserModule, NgbDropdownModule],
    exports: [NextToGoComponent],
    providers: [NextRaceService, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
