/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hotel_serchComponent } from './hotel_serch.component';

describe('Hotel_serchComponent', () => {
  let component: Hotel_serchComponent;
  let fixture: ComponentFixture<Hotel_serchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hotel_serchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hotel_serchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
