import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPointComponent } from './modify-point.component';

describe('ModifyPointComponent', () => {
  let component: ModifyPointComponent;
  let fixture: ComponentFixture<ModifyPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
