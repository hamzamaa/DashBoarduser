import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageListPointComponent } from './affichage-list-point.component';

describe('AffichageListPointComponent', () => {
  let component: AffichageListPointComponent;
  let fixture: ComponentFixture<AffichageListPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageListPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageListPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
