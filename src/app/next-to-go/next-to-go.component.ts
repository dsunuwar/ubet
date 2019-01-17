import { Component, OnInit } from '@angular/core';
import { Race } from '../models/race.interface';
import { AppService } from '../app.service';
import { RaceType } from '../models/race-type.interface';
import { race } from 'q';
import { ListItem } from '../models/list-item.interface';

@Component({
  selector: 'ub-next-to-go',
  templateUrl: './next-to-go.component.html',
  styleUrls: ['./next-to-go.component.scss']
})
export class NextToGoComponent implements OnInit {
  // races filtered by type
  nextToGoRaces: Race[];

  // keep a of all nextToGo races
  races: Race[];
  defaultNextToGoRace: ListItem = {label:'Thoroughbred', value:'R'};
  
  listOfRaceTypes: ListItem[] = [
    {label:'Thoroughbred', value:'R'},
    {label:'Greyhounds', value:'G'},
    {label:'Harness', value:'H'}
  ];

  defaultJurisdiction: ListItem = {label: 'New South Wales', value: 'NSW'};
  listOfJurisdiction: ListItem[] = [
    {label: 'New South Wales', value: 'NSW'},
    {label: 'Victoria', value: 'VIC'}
  ];

  constructor(private raceService: AppService) { }

  ngOnInit() {
    this.getRacesByJurisdiction(this.defaultJurisdiction);
  }

  filterRaces(raceType: RaceType) {
    this.nextToGoRaces = this.sortRacesByTime(this.races.filter(race => race.raceType === raceType.value));
  }

  switchJurisdiction(jurisdiction) {
    this.getRacesByJurisdiction(jurisdiction);
  }

  getRacesByJurisdiction(jurisdiction){
    this.raceService.getRaces(jurisdiction.value).subscribe(res => {
      this.races = res;
      this.filterRaces(this.defaultNextToGoRace);
    })
  }

  sortRacesByTime(races): Race[] {
    return races.sort((a,b) => new Date(a.raceStartTime).getTime() - new Date(b.raceStartTime).getTime());
  }

}
