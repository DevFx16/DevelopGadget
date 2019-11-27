import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppviewComponent } from './appview.component';

describe('AppviewComponent', () => {
  let component: AppviewComponent;
  let fixture: ComponentFixture<AppviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
