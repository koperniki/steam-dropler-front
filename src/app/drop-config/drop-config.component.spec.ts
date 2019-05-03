import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropConfigComponent } from './drop-config.component';

describe('DropConfigComponent', () => {
  let component: DropConfigComponent;
  let fixture: ComponentFixture<DropConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
