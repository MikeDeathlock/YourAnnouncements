import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverticementsListComponent } from './adverticements-list.component';

describe('AdverticementsListComponent', () => {
  let component: AdverticementsListComponent;
  let fixture: ComponentFixture<AdverticementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverticementsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverticementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
