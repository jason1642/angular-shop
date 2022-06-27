import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-display',
  templateUrl: './search-results-display.component.html',
  styleUrls: ['./search-results-display.component.scss']
})
export class SearchResultsDisplayComponent implements OnInit {
  responseArray = [{ title: 'first response', data: 'This is the content'}, {title: 'Second result', data: 'This is the information found'}]
  constructor() { }

  ngOnInit(): void {
  }

}
