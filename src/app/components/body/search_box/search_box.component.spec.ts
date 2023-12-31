/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Search_boxComponent } from './search_box.component';

describe('Search_boxComponent', () => {
  let component: Search_boxComponent;
  let fixture: ComponentFixture<Search_boxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Search_boxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search_boxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
