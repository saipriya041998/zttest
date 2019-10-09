import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextdemoComponent } from './contextdemo.component';

describe('ContextdemoComponent', () => {
  let component: ContextdemoComponent;
  let fixture: ComponentFixture<ContextdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
