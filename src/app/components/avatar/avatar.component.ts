import { StepService } from './../../services/step.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor(private dataService: DataService, private stepService: StepService) { }

  public title: string = "Avatar";

  ngOnInit(): void {
    this.stepService.setTitle(this.title);

  }
  selectedAvatar: number = 1;

  selectAvatar(avatarId: number){
    this.selectedAvatar = avatarId;
  }
  nextStep(){
    this.dataService.setAvatar(this.selectedAvatar);
    this.stepService.nextStep();
  }
  backStep(){
    this.stepService.backStep();
  }
  skip(){
    this.stepService.nextStep();
  }
}
