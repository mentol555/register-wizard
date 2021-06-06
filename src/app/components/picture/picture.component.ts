import { StepService } from './../../services/step.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  public title: string = "Profile picture";

  constructor(private dataService: DataService, private stepService: StepService) { }

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }

  public pictureUrl = "";
  public selectedImage = {} as File;
  onFileSelected(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.pictureUrl = event.target.result;
        this.selectedImage = event.target.result;
      }
    }
  }
  nextStep(){
    if(!this.pictureUrl){
      alert("Please upload a profile picture!");
    }
    else{
      this.stepService.nextStep();
      this.dataService.setPicture(this.selectedImage);
    }
  }
  skip(){
    this.stepService.nextStep();
  }
  backStep(){
    this.stepService.backStep();
  }

}
