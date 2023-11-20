import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseServerComponent } from './choose-server.component';

describe('ChooseServerComponent', () => {
  let component: ChooseServerComponent;
  let fixture: ComponentFixture<ChooseServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
