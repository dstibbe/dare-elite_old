import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({providedIn: 'root'})
export class UsersService {

 
    constructor(private firestore: AngularFirestore) { }

    getUsersList() {
       return  this.firestore.collection('users').snapshotChanges();
    }

}

