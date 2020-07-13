import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeloLouerComponent } from './add-velo-louer.component';

describe('AddVeloLouerComponent', () => {
  let component: AddVeloLouerComponent;
  let fixture: ComponentFixture<AddVeloLouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVeloLouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeloLouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
