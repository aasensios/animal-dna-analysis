import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqFormComponent } from './seq-form.component';

describe('SeqFormComponent', () => {
  let component: SeqFormComponent;
  let fixture: ComponentFixture<SeqFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeqFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
