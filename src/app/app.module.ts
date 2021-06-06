import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { HeaderComponent } from './components/header/header.component';
import { StepComponent } from './components/step/step.component';
import { NameComponent } from './components/name/name.component';
import { PictureComponent } from './components/picture/picture.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { GenderComponent } from './components/gender/gender.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FinalComponent } from './components/final/final.component';
import { SkillLevelComponent } from './components/skill-level/skill-level.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    StepComponent,
    NameComponent,
    PictureComponent,
    AvatarComponent,
    GenderComponent,
    BirthdayComponent,
    ContactComponent,
    SkillsComponent,
    FinalComponent,
    SkillLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
