import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public title: string = "Skills";

  myForm: FormGroup;

  skls: string[] = [
    "Graphic Designer", "Programmer", "Team leader", "Ambition"
  ];

  langs: string[] = [
    "English", "Hungarian", "French", "Romanian"
  ];

  levels: string[] = [
    "Beginner", "Rookie", "Intermediate", "Pro", "Master"
  ];

  constructor(private fb: FormBuilder, private stepService: StepService, private dataService: DataService) { }

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
    this.myForm = this.fb.group({
      skills: this.fb.array([]),
      languages: this.fb.array([]),
      licenses: [""]
    })
  }

  get skillForms(){
    return this.myForm?.get('skills') as FormArray;
  }

  get languageForms(){
    return this.myForm?.get('languages') as FormArray;
  }

  addSkill(){
    if(this.skillForms.length === 3){
      return;
    }
    const skill = this.fb.group({
      skillname: [],
      skilllevel: [0],
    })
    this.skillForms.push(skill);
  }

  addLanguage(){
    if(this.languageForms.length === 3){
      return;
    }
    const language = this.fb.group({
      langname: [],
      langlevel: [],
    })
    this.languageForms.push(language);
  }

  public licenselist: string[] = [
    "A", "A1", "B", "C", "D"
  ];

  nextStep(){
    this.dataService.setSkills(this.myForm.value);
    this.stepService.nextStep();
  }
  backStep(){
    this.stepService.backStep();
  }
  skip(){
    this.stepService.nextStep();
  }
}
