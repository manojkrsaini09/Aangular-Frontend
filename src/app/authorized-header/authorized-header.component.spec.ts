import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedHeaderComponent } from './authorized-header.component';

describe('AuthorizedHeaderComponent', () => {
  let component: AuthorizedHeaderComponent;
  let fixture: ComponentFixture<AuthorizedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
