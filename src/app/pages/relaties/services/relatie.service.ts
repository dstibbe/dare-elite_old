import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class RelatieService {

  constructor(private firestore: AngularFirestore) { }

  getRelaties() {
    return this.firestore.collection('relaties').snapshotChanges();
  }
}
