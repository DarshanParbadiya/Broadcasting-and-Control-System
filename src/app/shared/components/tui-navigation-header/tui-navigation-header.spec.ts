import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiNavigationHeader } from './tui-navigation-header';

describe('TuiNavigationHeader', () => {
  let component: TuiNavigationHeader;
  let fixture: ComponentFixture<TuiNavigationHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuiNavigationHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuiNavigationHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
