import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverticementItemComponent } from './adverticement-item.component';

describe('AdverticementItemComponent', () => {
  let component: AdverticementItemComponent;
  let fixture: ComponentFixture<AdverticementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverticementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverticementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
