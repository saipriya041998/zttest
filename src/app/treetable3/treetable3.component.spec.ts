import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Treetable3Component } from './treetable3.component';

describe('Treetable3Component', () => {
  let component: Treetable3Component;
  let fixture: ComponentFixture<Treetable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Treetable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Treetable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
