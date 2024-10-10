import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { GradePipePipe } from './grade-pipe.pipe';
import { GradeDirective } from './grade.directive';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement
  let component: AppComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, GradePipePipe,GradeDirective
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent)
      el = fixture.debugElement;
      component = fixture.componentInstance;
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UnitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UnitTesting');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('UnitTesting app is running!');
  // });

  it('should render button with text subsribe ', () => {
    component.isSubscribed = false;
    fixture.detectChanges();

    const btnElement = el.queryAll(By.css('.subscribe'))
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribe')
    //console.log(btnElement);

    expect(btnElement[0].nativeElement.disabled).toBeFalse()

    //console.log(btnElement);


    //component.btnText='Yet to Sunbcribe'


  });


  //  it('should render button with text subsribe and button should be disabled after clicked ', (done:DoneFn) => {

  //   component.isSubscribed=false;

  //   fixture.detectChanges();
  //   let btnElement=el.queryAll(By.css('.subscribe')) 
  //   component.btnText='Subscribed'

  //   console.log("start...");

  //  console.log(component.btnText);
  //  console.log(component.isSubscribed);


  //   btnElement[0].nativeElement.click()

  //   //fixture.detectChanges();

  //   //console.log(btnElement);

  //   setTimeout(()=>{
  //     console.log("some other test cases");
  //     done()

  //   },8000)

  //  setTimeout(()=>{
  //   fixture.detectChanges()

  //   btnElement=el.queryAll(By.css('.subscribe'))
  //   console.log(btnElement);

  //   expect(btnElement[0].nativeElement.textContent).toBe('Subscribe')
  //   expect(btnElement[0].nativeElement.disabled).toBeFalse()

  //  },3000)

  //  })

  it('should render the button with the text subsribed and the button should be disabled after i clicked ', fakeAsync(() => {

    component.isSubscribed = false;

    fixture.detectChanges();
    let btnElement = el.queryAll(By.css('.subscribe'))
    component.btnText = 'Subscribed'

    console.log("start...");

    console.log(component.btnText);
    console.log(component.isSubscribed);


    btnElement[0].nativeElement.click()

    //fixture.detectChanges();

    //console.log(btnElement);

    setTimeout(() => {
      console.log("some other test cases");
      //done()

    }, 8000)

    setTimeout(() => {
      fixture.detectChanges()

      btnElement = el.queryAll(By.css('.subscribe'))
      console.log(btnElement);



    }, 3000)
    //tick(3000);
    flush()
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribed')
    expect(btnElement[0].nativeElement.disabled).toBeTrue()
    //tick(5000);
  }));


  it("should test the promise", fakeAsync(() => {
    let counter = 0;



   
      setTimeout(()=>{
        counter = counter + 2
        console.log('first time out');
        
      },2000)
      setTimeout(()=>{
        counter = counter + 3
        console.log('second time out');
      },3000)


      // this promise code will execute first everytime
      Promise.resolve().then(() => {
        console.log('promise time out');
        counter = counter + 1;
    })
    //flush()
    flushMicrotasks()
    expect(counter).toBe(1)
    tick(2000)
    expect(counter).toBe(3)
    tick(3000)
    expect(counter).toBe(6)

  }))

  it("It Should test the observable ",fakeAsync(()=>{
    let isSubscribed= false;
    let myObs= of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(()=>{
      isSubscribed=true;
    });
    tick(1000)
    expect((isSubscribed)).toBeTrue

  }))

});
