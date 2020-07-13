import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageListVeloComponent } from './affichage-list-velo.component';

describe('AffichageListVeloComponent', () => {
  let component: AffichageListVeloComponent;
  let fixture: ComponentFixture<AffichageListVeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageListVeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageListVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
