import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stripev2Component } from './stripev2.component';

describe('Stripev2Component', () => {
  let component: Stripev2Component;
  let fixture: ComponentFixture<Stripev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stripev2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stripev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
