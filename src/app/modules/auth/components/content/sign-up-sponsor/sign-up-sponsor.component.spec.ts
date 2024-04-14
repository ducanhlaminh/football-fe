import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSponsorComponent } from './sign-up-sponsor.component';

describe('SignUpSponsorComponent', () => {
  let component: SignUpSponsorComponent;
  let fixture: ComponentFixture<SignUpSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
