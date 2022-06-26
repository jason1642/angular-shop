import { Component, OnInit } from '@angular/core';
import { SearchInputService } from 'src/app/views/home-page/services/search-input.service';
import { SearchInput } from 'src/app/views/types/interfaces/search-input';
import { SearchInputComponent } from '../search-input/search-input.component';
const dataArray = <Array<string>>['First string', 'second string', 'third string']



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  

  
export class HeaderComponent implements OnInit {

  

  constructor(private searchInputservice: SearchInputService) { 
    
  }
  myCustomColor = 'yellow';
  headerTitle = 'My angular shop';
  dataArray = dataArray;
  cartTotalItems = 7;

  ngOnInit(): void {
    // console.log('On component did mount')
    this.searchInputservice.getInput.subscribe(str => {
      console.log(str)
    })
  }


  ngOnDestroy(): void {
    console.log('Unmounted component') 
  }

}