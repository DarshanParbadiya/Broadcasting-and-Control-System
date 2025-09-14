import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsForm } from './reports-form';

describe('ReportsForm', () => {
  let component: ReportsForm;
  let fixture: ComponentFixture<ReportsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
