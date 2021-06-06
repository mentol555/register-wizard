import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public title: string = "Contact";

  public phonenrs: string[] = [""];
  public email: string = "";
  public facebook: string = "";
  public instagram: string = "";
  public linkedin: string = "";
  public twitter: string = "";
  constructor(private stepService: StepService, private dataService: DataService) { }

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  anotherPhone(){
    if(this.phonenrs.length < 2){
      this.phonenrs.push("");
    }
    else{
      alert("Max 2 phone numbers allowed!");
    }
  }
  public contactdatas: string[] = [];
  nextStep(){
    if(this.phonenrs.length === 1 && this.phonenrs[0] === ""){
      alert("Please add a phone number!");
      return;
    }
    if(this.phonenrs.length === 2 && (this.phonenrs[0] === "" && this.phonenrs[1] === "")){
      alert("Please add a phone number!");
      return;
    }
    if(this.email === "" || this.emailFormControl.hasError('email')){
      alert("Please add a valid email!");
      return;
    }
    for(let e of this.phonenrs){
      if(e === ""){continue;}
      this.contactdatas.push("+" + e);
    }
    this.contactdatas.push(this.email);
    this.contactdatas.push("Facebook: " + this.facebook);
    this.contactdatas.push("Instagram: " + this.instagram);
    this.contactdatas.push("Linkedin: " + this.linkedin);
    this.contactdatas.push("Twitter: " + this.twitter);
    this.dataService.setContactinfos(this.contactdatas);
    this.stepService.nextStep();
  }
  backStep(){
    this.stepService.backStep();
  }
}
