import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoryBarComponent } from './top-category-bar.component';

describe('TopCategoryBarComponent', () => {
  let component: TopCategoryBarComponent;
  let fixture: ComponentFixture<TopCategoryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategoryBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
