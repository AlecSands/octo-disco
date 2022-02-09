import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ButtonComponent]});
    fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should be defined when created', () => {
    expect(component).toBeDefined();
  });

  it('should contain "placeholder" as button label', () => {
    expect(compiled.querySelector('button')?.textContent).toContain('placeholder');
  });
});
