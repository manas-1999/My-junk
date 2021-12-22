import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkfoodComponent } from './junkfood.component';

describe('JunkfoodComponent', () => {
  let component: JunkfoodComponent;
  let fixture: ComponentFixture<JunkfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunkfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunkfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
