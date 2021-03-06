import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  // Add custom properties that can be injected from the outside
  @Input() faceSnap!: FaceSnap
  buttonText! : String;

  // Appeler automiquement au moment de la création de chaque instance
  ngOnInit(){
    this.buttonText="Oh snap !!";
  }

  // Inject Service
  constructor(private faceSnapService : FaceSnapService, private router :Router){}

  onAddSnap(){
    if (this.buttonText==="Oh snap !!")
    {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText="Oops unSnap !!";
    }
    else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText="Oh snap !!";
    }   
  }

  onViewDetail() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }
  
}
