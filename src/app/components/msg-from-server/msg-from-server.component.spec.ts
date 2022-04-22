import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgFromServerComponent } from './msg-from-server.component';

describe('MsgFromServerComponent', () => {
  let component: MsgFromServerComponent;
  let fixture: ComponentFixture<MsgFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgFromServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
