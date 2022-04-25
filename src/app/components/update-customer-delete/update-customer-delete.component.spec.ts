import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerDeleteComponent } from './update-customer-delete.component';

describe('UpdateCustomerDeleteComponent', () => {
  let component: UpdateCustomerDeleteComponent;
  let fixture: ComponentFixture<UpdateCustomerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
