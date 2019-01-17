import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RaceInfo } from './models/race.model';
import { Race } from './models/race.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // TODO: put this in settings file
  private api = `/api/next-race`;

  constructor(private http: HttpClient) { }

  getRaces(jurisdiction: 'NSW'|'VIC' = 'NSW') {
      // TODO: create an interface for api response to avoid TS2339 error
      return this.http.get<any>(`${this.api}/${jurisdiction}`)
        .pipe(
          map(res => {
              return res.races.map(race => new RaceInfo(race))
          })
        );
  }

}
