import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiTable } from './tui-table';

describe('TuiTable', () => {
  let component: TuiTable;
  let fixture: ComponentFixture<TuiTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuiTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuiTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
