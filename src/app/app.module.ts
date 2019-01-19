import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

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
    providers: [HttpClientModule, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {}
