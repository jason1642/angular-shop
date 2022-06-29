import { Component, OnInit } from '@angular/core';
import { SearchInputService } from 'src/app/views/home-page/services/search-input.service';
import { SearchInput } from 'src/app/views/types/interfaces/search-input';
import { SearchInputComponent } from '../search-input/search-input.component';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const dataArray = <Array<string>>['Shirts', 'Pants', 'Shoes', 'Summer', 'Work Wear', 'Swim', 'Accessories','Jackets', 'Sale']


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  

  
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faCartShopping = faCartShopping;

  constructor(private searchInputservice: SearchInputService) { 
    
  }
  myCustomColor = 'yellow';
  headerTitle = 'My angular shop';
  dataArray = dataArray;
  cartTotalItems = 7;

  ngOnInit(): void {
    // console.log('On component did mount')
    this.searchInputservice.currentInputState.subscribe(str => {
      console.log(str)
      this.headerTitle = str
    }) 
  }


  ngOnDestroy(): void {
    console.log('Unmounted component') 
  }

}