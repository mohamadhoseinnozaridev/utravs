/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Footer_hotelComponent } from './footer_hotel.component';

describe('Footer_hotelComponent', () => {
  let component: Footer_hotelComponent;
  let fixture: ComponentFixture<Footer_hotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer_hotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer_hotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
