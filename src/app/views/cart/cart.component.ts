import { Component, OnInit } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
  

export class CartComponent implements OnInit {
  faBagShopping = faBagShopping;
  userCart = ['item1', 'item2', 'item3', 'item4', 'item5']
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
