import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlight.DirectiveComponent } from './highlight.directive.component';

describe('Highlight.DirectiveComponent', () => {
  let component: Highlight.DirectiveComponent;
  let fixture: ComponentFixture<Highlight.DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Highlight.DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Highlight.DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
