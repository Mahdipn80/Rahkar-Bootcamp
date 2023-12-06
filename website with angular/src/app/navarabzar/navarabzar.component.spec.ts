import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarabzarComponent } from './navarabzar.component';

describe('NavarabzarComponent', () => {
  let component: NavarabzarComponent;
  let fixture: ComponentFixture<NavarabzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavarabzarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavarabzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
