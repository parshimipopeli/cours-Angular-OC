import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent {

  constructor(private formBuilder: FormBuilder) { };

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      localisation: [null]
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({ 
        ...formValue,
        dateCreation: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
  }
}
