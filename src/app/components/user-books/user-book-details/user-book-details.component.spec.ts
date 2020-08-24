import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookDetailsComponent } from './user-book-details.component';

describe('UserBookDetailsComponent', () => {
  let component: UserBookDetailsComponent;
  let fixture: ComponentFixture<UserBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
