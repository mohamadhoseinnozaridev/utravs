/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Serch_cityComponent } from './serch_city.component';

describe('Serch_cityComponent', () => {
  let component: Serch_cityComponent;
  let fixture: ComponentFixture<Serch_cityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serch_cityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serch_cityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
