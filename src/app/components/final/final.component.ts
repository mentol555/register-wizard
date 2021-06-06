import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  public title: string = "Final";
  constructor(private stepService: StepService, private dataService: DataService) { }

  ngOnInit(): void {
    this.stepService.setTitle(this.title);
  }

}
