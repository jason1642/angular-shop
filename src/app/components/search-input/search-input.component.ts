import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
  

  
export class SearchInputComponent implements OnInit {

  userInput: string = '';
  constructor() {}

  
   private options = () =>( {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/auto-complete',
    params: {q: this.userInput, region: 'US'},
    headers: {
      'X-RapidAPI-Key': '95e9fc104dmsha6ddc418cd1fc07p1de64cjsn2088bc16337e',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  })


  public onInputChange = (event: any) => {
    this.userInput = event.target.value
    console.log(event.target.value)
    console.log('User input change')
  }


  public onSubmit = async () => {
      await axios.request(this.options()).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.error(error);
      });
  }
  
  
  ngOnInit(): void {


 

  }

}