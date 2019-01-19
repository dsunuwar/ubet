import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextToGoComponent } from './next-to-go.component';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

describe('NextToGoComponent', () => {
    let component: NextToGoComponent;
    let fixture: ComponentFixture<NextToGoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NextToGoComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NextToGoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
