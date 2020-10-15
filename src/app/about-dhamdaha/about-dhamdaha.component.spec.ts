import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDhamdahaComponent } from './about-dhamdaha.component';

describe('AboutDhamdahaComponent', () => {
  let component: AboutDhamdahaComponent;
  let fixture: ComponentFixture<AboutDhamdahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDhamdahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDhamdahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
