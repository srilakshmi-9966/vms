import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleconditionsComponent } from './multipleconditions.component';

describe('MultipleconditionsComponent', () => {
  let component: MultipleconditionsComponent;
  let fixture: ComponentFixture<MultipleconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleconditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
