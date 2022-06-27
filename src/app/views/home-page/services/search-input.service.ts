import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  @Output() customOnSubmit = new EventEmitter();

  userInput: string = ''
  results: any = {}

  private searchResults = new BehaviorSubject<any>(this.results)
  currentResultState = this.searchResults.asObservable()



  private searchInput = new BehaviorSubject<string>(this.userInput)
  currentInputState = this.searchInput.asObservable();



  public getInput(): Observable<string> {
    const text = of(this.userInput)
    return text;
  }

  constructor() {

  }

  public getResults(): Observable<any>{
    const res = of(this.results)
    return res
  }

  public setResults(data: any){

    this.searchResults.next(data)
    console.log(data, 'this is from the search service file')
    return this.currentResultState
  }


  public setInput(input: string) { 
    console.log(input, 'this is from the service file')
    // this.userInput = input
    this.searchInput.next(input)
    return this.currentInputState
  }
  
}
