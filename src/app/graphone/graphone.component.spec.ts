import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphoneComponent } from './graphone.component';

describe('GraphoneComponent', () => {
  let component: GraphoneComponent;
  let fixture: ComponentFixture<GraphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
