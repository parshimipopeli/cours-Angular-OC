import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import { concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink,
        RouterLinkActive, FaceSnapComponent, FaceSnapListComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {


    redTrainsCalled = 0;
    yellowTrainsCalled = 0;

    ngOnInit() {
    //     interval(1000).pipe(
    //         take(10),
    //         map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    //         tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //         switchMap(color => this.getTrainObservable$(color)),
    //         tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    //     ).subscribe();
    // }

    // getTrainObservable$(color: 'rouge' | 'jaune') {
    //     const isRedTrain = color === 'rouge';
    //     isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    //     const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    //     console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    //     return of({ color, trainIndex }).pipe(
    //         delay(isRedTrain ? 5000 : 6000)
    //     );
    // }

    // translateColor(color: 'rouge' | 'jaune') {
    //     return color === 'rouge' ? 'red' : 'yellow';
    }
}
