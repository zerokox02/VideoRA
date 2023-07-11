import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearReunionModalPage } from './crear-reunion-modal.page';

describe('CrearReunionModalPage', () => {
  let component: CrearReunionModalPage;
  let fixture: ComponentFixture<CrearReunionModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearReunionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
