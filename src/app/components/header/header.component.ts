import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
const dataArray = <Array<string>>['First string', 'second string', 'third string']



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  

  
export class HeaderComponent implements OnInit {

  constructor() { }
  myCustomColor = 'yellow';
  headerTitle = 'My angular shop';
  dataArray = dataArray;
  cartTotalItems = 7;

  ngOnInit(): void {
    console.log('On component did mount')
  }

  ngOnDestroy(): void {
    console.log('Unmounted component') 
  }

}