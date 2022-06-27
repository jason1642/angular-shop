import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsDisplayComponent } from './search-results-display.component';

describe('SearchResultsDisplayComponent', () => {
  let component: SearchResultsDisplayComponent;
  let fixture: ComponentFixture<SearchResultsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
