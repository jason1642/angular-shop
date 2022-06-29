import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
  

export class CartComponent implements OnInit {

  userCart = ['item1', 'item2', 'item3', 'item4', 'item5']
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
