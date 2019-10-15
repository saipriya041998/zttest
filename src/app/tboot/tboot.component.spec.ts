import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbootComponent } from './tboot.component';

describe('TbootComponent', () => {
  let component: TbootComponent;
  let fixture: ComponentFixture<TbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
