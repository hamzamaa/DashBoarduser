import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVeloComponent } from './modify-velo.component';

describe('ModifyVeloComponent', () => {
  let component: ModifyVeloComponent;
  let fixture: ComponentFixture<ModifyVeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyVeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
