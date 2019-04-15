import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  
  usersCollection: AngularFirestoreCollection<any>;
  userDocument:   AngularFirestoreDocument<any>;

    constructor(private firestore: AngularFirestore) { 
      this.usersCollection = this.firestore.collection('users');
    }
    
    getUsers(): Observable<any[]> {
      // ['added', 'modified', 'removed']
      return this.usersCollection.snapshotChanges().pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            return { id: a.payload.doc.id, ...data };
          });
        })
      );
    }

} 