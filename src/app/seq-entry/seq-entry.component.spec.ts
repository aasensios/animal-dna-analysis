import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqEntryComponent } from './seq-entry.component';

describe('SeqEntryComponent', () => {
  let component: SeqEntryComponent;
  let fixture: ComponentFixture<SeqEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeqEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
