import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass, NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, CommonModule, RouterLink],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {


  @Input() faceSnap!: FaceSnap;
  buttonText = "Oh snaps";

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSnaps() {

    if (this.buttonText === "Oh snaps") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops unSnap"
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh snaps";
    }

  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}
