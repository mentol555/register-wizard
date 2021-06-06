import { Datas} from './../registration';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:5000/data"; // url az adatot tarolo json-hoz

  public datas : Datas = 
    {
      name: "",
      accostname: "",
      picture: {} as File,
      avatar: 1,
      gender: "",
      birthinfo: "",
      contact: [],
      skills: "",
    };

  setName(name: string, accostname: string){
    this.datas.name = name;
    this.datas.accostname = accostname;
    console.log(this.datas);
  }
  setPicture(image: File){
    console.log(image);
    this.datas.picture = image;
    console.log(this.datas);
  }
  setAvatar(avatarId: number){
    this.datas.avatar = avatarId;
    console.log(this.datas);
  }
  setGender(gender: string){
    this.datas.gender = gender;
    console.log(this.datas);
  }
  setBirthInfo(birthinfo: string){
    this.datas.birthinfo = birthinfo;
    console.log(this.datas);
  }
  setContactinfos(infos: string[]){
    this.datas.contact = infos;
    console.log(this.datas);
  }
  setSkills(skills: {}){
    this.datas.skills = skills;
    console.log(skills);
    this.saveDatas().subscribe( (value) => console.log(value));
  }
  // a setSkills() vegen hivodik, tehat mikor vege az utolso adatgyujtesnek is
  saveDatas(): Observable<Datas>{
      console.log("ok");
      return this.http.post<Datas>(this.url, this.datas, httpOptions);
    }
}
