import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPluralsComponent } from './about-plurals.component';

describe('AboutPluralsComponent', () => {
  let component: AboutPluralsComponent;
  let fixture: ComponentFixture<AboutPluralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPluralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPluralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
