import { Component } from '@angular/core';
import { race } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TAB.COM.AU';

  filterRaces(raceType){
    console.log(raceType);
  }
}
