import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsettingComponent } from './faqsetting.component';

describe('FaqsettingComponent', () => {
  let component: FaqsettingComponent;
  let fixture: ComponentFixture<FaqsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
