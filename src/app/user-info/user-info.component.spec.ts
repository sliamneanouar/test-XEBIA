import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('_displayLabel init & right typeof', () => {
    expect(component._displayLabel).toEqual(jasmine.any(Boolean));
    component._displayLabel = false;
  });
  it('_displayImage init', () => {
    expect(component._displayImage).toEqual(jasmine.any(Boolean));
    component._displayImage = false;
  });
});
