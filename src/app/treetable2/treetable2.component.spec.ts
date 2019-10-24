import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Treetable2Component } from './treetable2.component';

describe('Treetable2Component', () => {
  let component: Treetable2Component;
  let fixture: ComponentFixture<Treetable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Treetable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Treetable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
