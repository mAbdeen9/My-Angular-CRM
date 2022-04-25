import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactsDeleteComponent } from './update-contacts-delete.component';

describe('UpdateContactsDeleteComponent', () => {
  let component: UpdateContactsDeleteComponent;
  let fixture: ComponentFixture<UpdateContactsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
