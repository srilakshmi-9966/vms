import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsssComponent } from './formsss.component';

describe('FormsssComponent', () => {
  let component: FormsssComponent;
  let fixture: ComponentFixture<FormsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
