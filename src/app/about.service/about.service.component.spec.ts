import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About.ServiceComponent } from './about.service.component';

describe('About.ServiceComponent', () => {
  let component: About.ServiceComponent;
  let fixture: ComponentFixture<About.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About.ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(About.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
