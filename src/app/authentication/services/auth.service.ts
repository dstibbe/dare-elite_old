import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
  user: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  //// Email/Password Auth ////

  async emailSignUp(email: string, password: string) {
    try {
      const credential = await this.afAuth.auth
        .createUserWithEmailAndPassword(email, password);
      return this.updateUserData(credential.user); // if using firestore
    }
    catch (error) {
      return this.handleError(error);
    }
  }

  async emailLogin(email: string, password: string) {
    try {
      const credential = await this.afAuth.auth
        .signInWithEmailAndPassword(email, password);
      return this.updateUserData(credential.user);
    }
    catch (error) {
      return this.handleError(error);
    }
  }

  // Sends email allowing user to reset password
  async resetPassword(email: string) {
    const fbAuth = auth();

    try {
      return fbAuth.sendPasswordResetEmail(email);
    }
    catch (error) {
      return this.handleError(error);
    }
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      firstname: user.firstname || null,
      lastname: user.lastname || null,
      crm: user.crm || false,
      inkoop: user.inkoop || false,
      verkoop: user.verkoop || false,
      isDeleted: user.isDeleted || false
    };
    return userRef.set(data);
  }
}