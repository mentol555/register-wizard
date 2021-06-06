
import { FormBuilder } from '@angular/forms';
import { DataService } from './../../services/data.service';

import { Subscription } from 'rxjs';
import { StepService } from './../../services/step.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = "";
  subscription: Subscription;

  @Input()
  public toShow: number = 0;

  @Output() callArrow = new EventEmitter();


  clickArrowLeft(){
    this.callArrow.emit(0);
  }
  clickArrowRight(){
    this.callArrow.emit(1);
  }

  constructor(private stepService: StepService, private dataService: DataService, private fb: FormBuilder) { 
    this.subscription = this.stepService.onTitleChange().subscribe(
      value => this.title = value
    );
  }

  ngOnInit(): void {
  }

  
}
