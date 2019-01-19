import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

// custom modules & components
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NextRaceComponent } from './next-race/next-race.component';
import { NextToGoComponent } from './next-to-go/next-to-go.component';

// data services
import { AppService } from './app.service';

@NgModule({
    declarations: [AppComponent, NextToGoComponent, NextRaceComponent],
    imports: [HttpClientModule, BrowserModule, SharedModule],
    providers: [AppService],

    // needed to support non html5 element i.e. custom components
    schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
