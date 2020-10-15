import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRakeshComponent } from './about-rakesh.component';

describe('AboutRakeshComponent', () => {
  let component: AboutRakeshComponent;
  let fixture: ComponentFixture<AboutRakeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRakeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRakeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
