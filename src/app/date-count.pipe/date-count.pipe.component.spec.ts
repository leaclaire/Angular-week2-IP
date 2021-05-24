import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCount.PipeComponent } from './date-count.pipe.component';

describe('DateCount.PipeComponent', () => {
  let component: DateCount.PipeComponent;
  let fixture: ComponentFixture<DateCount.PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCount.PipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCount.PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
