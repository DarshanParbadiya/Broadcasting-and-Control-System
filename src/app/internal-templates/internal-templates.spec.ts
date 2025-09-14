import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTemplates } from './internal-templates';

describe('InternalTemplates', () => {
  let component: InternalTemplates;
  let fixture: ComponentFixture<InternalTemplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalTemplates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalTemplates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
