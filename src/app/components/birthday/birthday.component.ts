import { StepService } from './../../services/step.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(private dataService: DataService, private stepService: StepService) { }

  public title: string = "Birthday";

  public selectedCountry: string = "";

  public countries: string[] = [
    "Hungary",
    "Germany",
    "Russia",
    "USA",
    "Romania"
  ];

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }
  
  public birthday: string = "";
  updateBirthdate(dateObject: string){
    let birthdate: string = dateObject.toString().substring(4,16);
    this.birthday = birthdate;
  }
  nextStep(){
    if(this.birthday === "" || this.selectedCountry === ""){
      alert("Missing data!");
    }
    else{
      this.dataService.setBirthInfo(this.selectedCountry + " - " + this.birthday);
      this.stepService.nextStep();
    }
  }
  backStep(){
    this.stepService.backStep();
  }
}
