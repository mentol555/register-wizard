import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  step: number = 0;
  private subject = new Subject<any>();
  constructor() { }


  nextStep(): void{
    this.step++;
    this.subject.next(this.step);
  }
  backStep(): void{
    this.step--;
    this.subject.next(this.step);
  }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }

  public actualTitle: string = "Kezdő";
  
  setTitle(title: string){
    this.actualTitle = title;
    this.subject_title.next(this.actualTitle);
    console.log("changed to: " + this.actualTitle);
  }
  
  private subject_title = new Subject<any>();
  onTitleChange(): Observable<any>{
    return this.subject_title.asObservable();
  }
}
