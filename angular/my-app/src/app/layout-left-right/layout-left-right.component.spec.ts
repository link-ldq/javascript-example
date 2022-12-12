import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftRightComponent } from './layout-left-right.component';

describe('LayoutLeftRightComponent', () => {
  let component: LayoutLeftRightComponent;
  let fixture: ComponentFixture<LayoutLeftRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLeftRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLeftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
