import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsNavComponent } from './options-nav.component';

describe('OptionsNavComponent', () => {
  let component: OptionsNavComponent;
  let fixture: ComponentFixture<OptionsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
