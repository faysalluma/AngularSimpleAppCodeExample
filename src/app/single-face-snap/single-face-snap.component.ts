import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap! : FaceSnap;
  buttonText! : String;

  // Inject Service
  constructor(private faceSnapService : FaceSnapService, private route : ActivatedRoute){}

  // Appeler automiquement au moment de la création de chaque instance
  ngOnInit(){
    this.buttonText="Oh snap !!";
    const facesnapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapService.getFaceSnapById(facesnapId);
  }

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

}
