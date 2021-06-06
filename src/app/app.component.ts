import { FinalComponent } from './components/final/final.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { GenderComponent } from './components/gender/gender.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { PictureComponent } from './components/picture/picture.component';
import { NameComponent } from './components/name/name.component';
import { FirstComponent } from './components/first/first.component';
import { StepService } from './services/step.service';
import { Subscription } from 'rxjs';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actualTitle: string = "";
  subscription: Subscription;
  toShow = 0;
  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.toShow = value
    );
  }
  @ViewChild(FirstComponent)
  private firstChild: FirstComponent;
  @ViewChild(NameComponent)
  private nameChild: NameComponent;
  @ViewChild(PictureComponent)
  private pictureChild: PictureComponent;
  @ViewChild(AvatarComponent)
  private avatarChild: AvatarComponent;
  @ViewChild(GenderComponent)
  private genderChild: GenderComponent;
  @ViewChild(BirthdayComponent)
  private birthdayChild: BirthdayComponent;
  @ViewChild(ContactComponent)
  private contactChild: ContactComponent;
  @ViewChild(SkillsComponent)
  private skillsChild: SkillsComponent;
  @ViewChild(FinalComponent)
  private finalChild: FinalComponent;

  calledArrow(arrowInd: number){
    switch (this.toShow) {
      case 0:
        if(arrowInd === 0){
          break;
        }
        else if(arrowInd === 1){
          this.firstChild.startRegistration();
        }
        break;
      case 1:
        if(arrowInd === 0){
          this.nameChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.nameChild.nextStep();
          break;
        }
        break;
      case 2:
        if(arrowInd === 0){
          this.pictureChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.pictureChild.nextStep();
          break;
        }
        break;
      case 3:
        if(arrowInd === 0){
          this.avatarChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.avatarChild.nextStep();
          break;
        }
        break;
      case 4:
        if(arrowInd === 0){
          this.genderChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.genderChild.nextStep();
          break;
        }
        break;
      case 5:
        if(arrowInd === 0){
          this.birthdayChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.birthdayChild.nextStep();
          break;
        }
        break;
      case 6:
        if(arrowInd === 0){
          this.contactChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.contactChild.nextStep();
          break;
        }
        break;
      case 7:
        if(arrowInd === 0){
          this.skillsChild.backStep();
          break;
        }
        else if(arrowInd === 1){
          this.skillsChild.nextStep();
          break;
        }
        break;
      case 8:
        //
        break;
      default:
        break;
    }
  }
  
}
