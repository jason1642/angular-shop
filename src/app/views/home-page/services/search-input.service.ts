import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  private userInput:BehaviorSubject<string> = new BehaviorSubject('')

  public readonly getInput: Observable<string> = this.userInput.asObservable()

  constructor() {

  }
  public setInput(input: string) { 
    // console.log(input, 'this is from the service file')
    this.userInput.next(input)
    console.log('setting input in service')
  }
  
}
