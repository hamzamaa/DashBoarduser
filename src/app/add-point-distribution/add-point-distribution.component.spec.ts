import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointDistributionComponent } from './add-point-distribution.component';

describe('AddPointDistributionComponent', () => {
  let component: AddPointDistributionComponent;
  let fixture: ComponentFixture<AddPointDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPointDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPointDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
