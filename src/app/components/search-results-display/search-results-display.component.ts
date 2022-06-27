import { Component, OnInit } from '@angular/core';
import { SearchInputService } from 'src/app/views/home-page/services/search-input.service';


@Component({
  selector: 'app-search-results-display',
  templateUrl: './search-results-display.component.html',
  styleUrls: ['./search-results-display.component.scss']
})
  
  
export class SearchResultsDisplayComponent implements OnInit {
  responseArray: Array<any> = []
  constructor(private searchInputService: SearchInputService) { }

  ngOnInit(): void {
    this.searchInputService.currentResultState.subscribe(data => {
      if (data.data) {
        this.responseArray = data.data
      }
      console.log(data, "SUBSCRIBED TO DATA RESULTS")
    })
  }

}
