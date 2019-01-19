import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DropdownListComponent } from './dropdown-list.component';

describe('DropdownListComponent', () => {
    let component: DropdownListComponent;
    let fixture: ComponentFixture<DropdownListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownListComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
