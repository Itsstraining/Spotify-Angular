import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User} from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any = null;
  user$: Observable<User>;
 
  constructor(
    private afAuth:AngularFireAuth,
   private afs: AngularFirestore,
    private router: Router
    ) {
      this.afAuth.authState.subscribe(data => this.authState = data); 
    }
    public checkCurrentUser(){
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }
   
     updateUserData({uid, email, photoURL}:User) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
      const data = { 
        uid, 
        email, 
        photoURL
      } 
  
      return userRef.set(data, { merge: true })
  
    }
  
   
  

}
