import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisoryComponent } from './divisory.component';

describe('DivisoryComponent', () => {
  let component: DivisoryComponent;
  let fixture: ComponentFixture<DivisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
