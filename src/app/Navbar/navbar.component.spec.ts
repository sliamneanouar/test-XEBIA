import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
describe('NavbarComponent', () => {
  let component : NavbarComponent;
  let fixture : ComponentFixture<NavbarComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    // fixture = TestBed.createComponent(AppComponent);
    // component = fixture.componentInstance;
    // debugElement = fixture.debugElement.query(By.css('p'));
    // htmlElement = fixture.debugElement.nativeElement;
  });
});
