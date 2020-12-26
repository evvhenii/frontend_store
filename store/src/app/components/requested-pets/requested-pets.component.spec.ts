import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedPetsComponent } from './requested-pets.component';

describe('RequestedPetsComponent', () => {
  let component: RequestedPetsComponent;
  let fixture: ComponentFixture<RequestedPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
