import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookEditComponent } from './user-book-edit.component';

describe('UserBookEditComponent', () => {
  let component: UserBookEditComponent;
  let fixture: ComponentFixture<UserBookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
