import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor(private stepService: StepService, private dataService: DataService) { }

  public title: string = "Gender";
  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }

  public selectedGender: string = "other";
  selectGender(gender: string){
    this.selectedGender = gender;
  }
  public nextStep(){
    console.log("dikk");
    this.dataService.setGender(this.selectedGender);
    this.stepService.nextStep();
  }
  public backStep(){
    this.stepService.backStep();
  }
}
