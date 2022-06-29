import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-nav',
  templateUrl: './options-nav.component.html',
  styleUrls: ['./options-nav.component.scss']
})
export class OptionsNavComponent implements OnInit {
  options = ['Remove', 'Edit', 'Save for later']
  constructor() { }

  ngOnInit(): void {
  }

}
