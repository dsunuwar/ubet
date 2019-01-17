import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextToGoComponent } from './next-to-go.component';

describe('NextToGoComponent', () => {
  let component: NextToGoComponent;
  let fixture: ComponentFixture<NextToGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextToGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextToGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
