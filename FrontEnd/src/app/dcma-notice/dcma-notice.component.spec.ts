import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmaNoticeComponent } from './dcma-notice.component';

describe('DcmaNoticeComponent', () => {
  let component: DcmaNoticeComponent;
  let fixture: ComponentFixture<DcmaNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmaNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmaNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
