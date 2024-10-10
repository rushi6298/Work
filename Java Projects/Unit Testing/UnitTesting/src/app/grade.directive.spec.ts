import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { GradePipePipe } from './grade-pipe.pipe';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {
  let component: AppComponent;
    let fixtrure: ComponentFixture<AppComponent>
    let el: DebugElement

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, GradePipePipe,GradeDirective]

      })
      fixtrure = TestBed.createComponent(AppComponent);
      component = fixtrure.componentInstance;
      el = fixtrure.debugElement;
      fixtrure.detectChanges();

    }))
  it('should create an instance', () => {
    
    let mockRef = {
      nativeElement: document.createElement('div')


    }
    const directive = new GradeDirective(mockRef);
    expect(directive).toBeTruthy();
  });

  it('should change the text color on mouse over',()=>{
    let divs = el.queryAll(By.css('div'));
    let div0=divs[0]
    let div1=divs[1]
    let div2=divs[2]
    let div3=divs[3]
    let div4=divs[4]
    div0.triggerEventHandler('mouseenter',{});
    fixtrure.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green')
    div1.triggerEventHandler('mouseenter',{});
    fixtrure.detectChanges();
    expect(div1.nativeElement.style.color).toBe('blue')
    div2.triggerEventHandler('mouseenter',{});
    fixtrure.detectChanges();
    expect(div2.nativeElement.style.color).toBe('blue')
    div3.triggerEventHandler('mouseenter',{});
    fixtrure.detectChanges();
    expect(div3.nativeElement.style.color).toBe('red')
    div4.triggerEventHandler('mouseenter',{});
    fixtrure.detectChanges();
    expect(div4.nativeElement.style.color).toBe('blue')


    
  })
});
