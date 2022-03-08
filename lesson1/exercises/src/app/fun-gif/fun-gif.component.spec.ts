import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunGifComponent } from './fun-gif.component';

describe('FunGifComponent', () => {
  let component: FunGifComponent;
  let fixture: ComponentFixture<FunGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
