import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadlinesPage } from './headlines.page';

describe('HeadlinesPage', () => {
  let component: HeadlinesPage;
  let fixture: ComponentFixture<HeadlinesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
