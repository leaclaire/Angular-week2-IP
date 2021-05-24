import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile.ServiceComponent } from './profile.service.component';

describe('Profile.ServiceComponent', () => {
  let component: Profile.ServiceComponent;
  let fixture: ComponentFixture<Profile.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Profile.ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
