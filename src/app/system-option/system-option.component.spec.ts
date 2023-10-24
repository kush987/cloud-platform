import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemOptionComponent } from './system-option.component';

describe('SystemOptionComponent', () => {
  let component: SystemOptionComponent;
  let fixture: ComponentFixture<SystemOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
