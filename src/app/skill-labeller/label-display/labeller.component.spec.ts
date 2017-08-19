import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabellerComponent } from './labeller.component';

describe('LabellerComponent', () => {
  let component: LabellerComponent;
  let fixture: ComponentFixture<LabellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
