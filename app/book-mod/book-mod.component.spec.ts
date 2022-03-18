import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookModComponent } from './book-mod.component';

describe('BookModComponent', () => {
  let component: BookModComponent;
  let fixture: ComponentFixture<BookModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
