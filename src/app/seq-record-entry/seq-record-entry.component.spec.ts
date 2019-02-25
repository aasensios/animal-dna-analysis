import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqRecordEntryComponent } from './seq-record-entry.component';

describe('SeqRecordEntryComponent', () => {
  let component: SeqRecordEntryComponent;
  let fixture: ComponentFixture<SeqRecordEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeqRecordEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqRecordEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
