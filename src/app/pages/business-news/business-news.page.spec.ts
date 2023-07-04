import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessNewsPage } from './business-news.page';

describe('BusinessNewsPage', () => {
  let component: BusinessNewsPage;
  let fixture: ComponentFixture<BusinessNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusinessNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
