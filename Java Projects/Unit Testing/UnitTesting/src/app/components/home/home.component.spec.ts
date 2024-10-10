import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');

    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
    let imgElement =el.queryAll(By.css('img'))
    expect(imgElement[0].nativeElement.src).toBe('https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg')
    expect(imgElement[1].nativeElement.src).toBe('https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg')

    component.title = "welcome to the angular testing";
    fixture.detectChanges();
    let titleElement = el.query(By.css('div'));
    expect(titleElement.nativeElement.textContent).toBe('welcome to the angular testing');
    
  });

});
