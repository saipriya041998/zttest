import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimedisplayComponent } from './primedisplay.component';

describe('PrimedisplayComponent', () => {
  let component: PrimedisplayComponent;
  let fixture: ComponentFixture<PrimedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
