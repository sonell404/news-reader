import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechNewsPage } from './tech-news.page';

describe('TechNewsPage', () => {
  let component: TechNewsPage;
  let fixture: ComponentFixture<TechNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
