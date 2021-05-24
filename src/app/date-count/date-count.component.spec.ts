import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCountComponent } from './date-count.component';

describe('DateCountComponent', () => {
  let component: DateCountComponent;
  let fixture: ComponentFixture<DateCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
