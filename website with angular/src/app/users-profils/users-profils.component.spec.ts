import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfilsComponent } from './users-profils.component';

describe('UsersProfilsComponent', () => {
  let component: UsersProfilsComponent;
  let fixture: ComponentFixture<UsersProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersProfilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
