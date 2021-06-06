import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  public title: string = "Name";
  public nameInput: string = "";
  public accostNameInput: string = "";
  constructor(private stepService: StepService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }

  public nextStep(){
    if(!this.nameInput || !this.accostNameInput){
      alert("Fill both inputs!");
    }
    else{
      this.stepService.nextStep();
      this.dataService.setName(this.nameInput, this.accostNameInput);
    }
  }
  backStep(){
    this.stepService.backStep();
  }
}
