import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevbarLeftComponent } from './nevbar-left.component';

describe('NevbarLeftComponent', () => {
  let component: NevbarLeftComponent;
  let fixture: ComponentFixture<NevbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevbarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
