import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../models/race.interface';

@Component({
  selector: 'ub-next-race',
  templateUrl: './next-race.component.html',
  styleUrls: ['./next-race.component.scss']
})
export class NextRaceComponent implements OnInit {
  @Input() nextRaces: Race[]; 

  constructor() {}
  ngOnInit() {}
}
