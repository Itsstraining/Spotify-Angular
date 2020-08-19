import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User=null;
  constructor(private auth:AngularFireAuth) { }
  public async logingg(){
    try{
    let provider=new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(provider);
    this.user = await this.auth.currentUser;
  }catch(err){
    console.error(err);
  }
  }
}
