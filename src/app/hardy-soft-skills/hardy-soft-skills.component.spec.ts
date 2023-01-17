import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardySoftSkillsComponent } from './hardy-soft-skills.component';

describe('HardySoftSkillsComponent', () => {
  let component: HardySoftSkillsComponent;
  let fixture: ComponentFixture<HardySoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardySoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardySoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
