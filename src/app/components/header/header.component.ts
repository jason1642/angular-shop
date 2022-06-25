import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  myCustomColor = 'yellow';
  headerTitle = 'My angular shop';
  
  cartTotalItems = 7;

  ngOnInit(): void {
    console.log('On component did mount')
  }

  ngOnDestroy(): void {
    console.log('Unmounted component') 
  }

}