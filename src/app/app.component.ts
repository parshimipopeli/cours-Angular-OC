import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import { filter, interval, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, 
        RouterLinkActive, FaceSnapComponent, FaceSnapListComponent,  HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent  implements OnInit {

    interval$!: Observable<string>

    ngOnInit(): void {
        this.interval$ = interval(1000).pipe(
            filter(value => value % 3 === 0),
            map(value => value % 2 === 0 ? 
                'je suis '  + value +  ' et je suis pair' : 
                'je suis ' + value + ' et je suis impair'
                )
        );

        
    }
}
