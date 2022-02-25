import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

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

  onAddSnap(){
    if (this.buttonText==="Oh snap !!")
    {
      this.faceSnap.snaps++;
      this.buttonText="Oops unSnap !!";
    }
    else{
      this.faceSnap.snaps--;
      this.buttonText="Oh snap !!";
    }   
  }
  
}
