import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'philippe',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 8,
            localisation: "Paris"
        },
        {
            id: 2,
            title: 'hghhghg',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 55,
            localisation: "Lille"
        },
        {
            id: 3,
            title: 'zezezezezezezeze',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 0,
        },
        {
            id: 4,
            title: 'philippe',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 8,
            localisation: "Paris"
        },
        {
            id: 5,
            title: 'hghhghg',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 55,
            localisation: "Lille"
        },
        {
            id: 6,
            title: 'zezezezezezezeze',
            description: 'je suis la',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            dateCreation: new Date(),
            snaps: 0,
        }

    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapsById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapsById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, localisation?: string }): void {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            dateCreation: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }
}
