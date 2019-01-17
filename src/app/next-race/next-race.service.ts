import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RaceInfo } from '../models/race.model';

@Injectable()
export class NextRaceService {
  // TODO: put this in settings file
  private api = `/api/next-race`;

  constructor(private http: HttpClient) { }

  nextRaces(jurisdiction: 'NSW'|'VIC' = 'NSW') {
    // TODO: create an interface for api response to avoid TS2339 error
      return this.http.get<any>(this.api)
        .pipe(
          map(res => {
            // const races = res.races;
            console.log(res.races);

              return res.races.map(race => {
                return new RaceInfo(race);
              })
          })
        );
  }
}
