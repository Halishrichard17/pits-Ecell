import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmiComponent } from './anmi.component';

describe('AnmiComponent', () => {
  let component: AnmiComponent;
  let fixture: ComponentFixture<AnmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
