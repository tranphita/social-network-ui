import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieComponent } from './storie.component';

describe('StorieComponent', () => {
  let component: StorieComponent;
  let fixture: ComponentFixture<StorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
