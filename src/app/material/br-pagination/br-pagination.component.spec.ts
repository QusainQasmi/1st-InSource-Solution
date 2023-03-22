import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrPaginationComponent } from './br-pagination.component';

describe('BrPaginationComponent', () => {
  let component: BrPaginationComponent;
  let fixture: ComponentFixture<BrPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
