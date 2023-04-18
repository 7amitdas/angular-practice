import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservUserComponent } from './observ-user.component';

describe('ObservUserComponent', () => {
  let component: ObservUserComponent;
  let fixture: ComponentFixture<ObservUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
