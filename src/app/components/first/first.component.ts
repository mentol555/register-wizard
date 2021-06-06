import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public id = 0;
  public selectedValue: string = "";
  public value: string = "";

  public languages: string[] = [
    "Magyar",
    "English",
    "Russian",
    "Spanish",
    "Romanian",
    "German",
    "French",
    "Italian"
  ];

  public selectedZone = "";
  public timezones: string[] = [
    "UTC",
    "UTC+1 London, United Kingdom",
    "UTC+2 Berlin, Germany",
    "UTC+3 Moscow, Russian Federation"
  ];

  constructor(private stepService: StepService) { }

  interval: any;
  time = new Date();

  public title = "Kezdő";
  ngOnInit(): void {
    this.stepService.setTitle(this.title);
    
    this.interval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  startRegistration(){
    this.stepService.nextStep();
  }
}
