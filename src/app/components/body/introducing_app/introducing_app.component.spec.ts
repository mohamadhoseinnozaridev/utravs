/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Introducing_appComponent } from './introducing_app.component';

describe('Introducing_appComponent', () => {
  let component: Introducing_appComponent;
  let fixture: ComponentFixture<Introducing_appComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Introducing_appComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Introducing_appComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
