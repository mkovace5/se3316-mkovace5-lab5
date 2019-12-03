import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDmcaComponent } from './song-dmca.component';

describe('SongDmcaComponent', () => {
  let component: SongDmcaComponent;
  let fixture: ComponentFixture<SongDmcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDmcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
