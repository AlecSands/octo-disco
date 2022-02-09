import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  it('should be defined when created', () => {
    TestBed.configureTestingModule({declarations: [ButtonComponent]});
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  // it('should create', () => {
  //   TestBed.configureTestingModule({declarations: [BannerComponent]});
  //   const fixture = TestBed.createComponent(BannerComponent);
  //   const component = fixture.componentInstance;
  //   expect(component).toBeDefined();
  // });
});
