import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  public steps = [
    
    {'id': 1, 'value':'Name'},
    {'id': 2, 'value':'Profile picture'},
    {'id': 3, 'value':'Avatar'},
    {'id': 4, 'value':'Gender'},
    {'id': 5, 'value':'Birthday'},
    {'id': 6, 'value':'Contact'},
    {'id': 7, 'value':'Skills'}

  ];

  subscription: Subscription;
  actual: number = 0;

  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.actual = value
    );
  }

  ngOnInit(): void {
  }

}
