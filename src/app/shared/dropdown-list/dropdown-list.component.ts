import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RaceType } from 'src/app/models/race-type.interface';
import { ListItem } from 'src/app/models/list-item.interface';

@Component({
    selector: 'ub-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {
    @Output() onListItemSelect: EventEmitter<any> = new EventEmitter();
    @Input() listItems: ListItem[];
    @Input() defaultListItem: ListItem;
    selectedListItem: ListItem;

    constructor() {}

    ngOnInit() {
        this.selectedListItem = this.defaultListItem;
    }

    onItemSelect(selectedListItem: RaceType) {
        this.selectedListItem = selectedListItem;
        this.onListItemSelect.emit(selectedListItem);
    }
}
