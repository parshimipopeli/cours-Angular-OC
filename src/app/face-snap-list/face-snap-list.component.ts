import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { RouterLink } from '@angular/router';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss',
    imports: [FaceSnapComponent]
})
export class FaceSnapListComponent implements  OnInit {

    faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;

    constructor(private faceSnapsService: FaceSnapsService) {}

    ngOnInit(): void {
        this.destroy$ = new Subject<boolean>();
        this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

        interval(1000).pipe(
            takeUntil(this.destroy$),
            tap(console.log)
            ).subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

}
