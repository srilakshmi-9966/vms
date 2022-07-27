import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctiononbuttonComponent } from './functiononbutton.component';

describe('FunctiononbuttonComponent', () => {
  let component: FunctiononbuttonComponent;
  let fixture: ComponentFixture<FunctiononbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctiononbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctiononbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
