import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X6Component } from './x6.component';

describe('X6Component', () => {
  let component: X6Component;
  let fixture: ComponentFixture<X6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
