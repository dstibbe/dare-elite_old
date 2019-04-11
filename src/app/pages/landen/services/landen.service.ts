import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class LandenService {

  constructor(private firestore: AngularFirestore) { }

  getLanden() {
    return this.firestore.collection('landen').snapshotChanges();
  }
}
