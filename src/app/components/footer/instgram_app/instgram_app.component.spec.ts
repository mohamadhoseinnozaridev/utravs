/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Instgram_appComponent } from './instgram_app.component';

describe('Instgram_appComponent', () => {
  let component: Instgram_appComponent;
  let fixture: ComponentFixture<Instgram_appComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Instgram_appComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Instgram_appComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
