import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorefoodComponent } from './explorefood.component';

describe('ExplorefoodComponent', () => {
  let component: ExplorefoodComponent;
  let fixture: ComponentFixture<ExplorefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorefoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
