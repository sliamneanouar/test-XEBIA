import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
 import { Home } from './page.home';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
   let component : Home;
  let fixture : ComponentFixture<Home>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Home
      ],
    }).compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    htmlElement = fixture.debugElement.nativeElement;
  });


  it('should render title in a h2 tag', async(() => {
    console.log('Home ', Home );
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain('');
  }));
  //
  //
  //
  // it('should display a current number of counter ', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   expect(htmlElement.querySelector('p').textContent).toContain('Number');
  // });
  // it('initiat counter 0', () => {
  //   fixture.detectChanges();
  //   expect(component.counter).toEqual(0);
  // });
  // it('should increment', () => {
  //   const oldValue = component.counter;
  //   component.incriment();
  //   fixture.detectChanges();
  //   const newValue = component.counter;
  //   expect(newValue).toBeGreaterThan(oldValue);
  // });
  // it('should Decrement', () => {
  //   const oldValue = component.counter;
  //   component.decriment();
  //   fixture.detectChanges();
  //   const newValue = component.counter;
  //   expect(newValue).toBeLessThan(oldValue);
  // });
  //
  //
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
//   describe('someReducer', () => {
//   it('should add a start parameter to true after ACTION.START', async(() => {
//         const result = someReducer(true);
//         expect(result).toEqual( true );
//     }));
//     it('should return the former state', async(() => {
//         const result = someReducer(false);
//         expect(result).toEqual(  false );
//     }));
// });
});
