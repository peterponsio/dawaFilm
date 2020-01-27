import { Users } from './../model/user.interface';

import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { error, stringify } from '@angular/compiler/src/util';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from 'firebase';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private newUser:Users,private afAuth:AngularFireAuth,public toastController: ToastController,private db:AngularFirestore) {
      this.newUser.id="",
      this.newUser.mail="",
      this.newUser.password="" 
   }

  


   StorageUser(usu:Users){

      this.db.doc("/users/"+usu.id ).set(usu);

   }


  async createUser(mail:string,password:string){
       return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
        .then((credential:firebase.auth.UserCredential)=>{
       
          console.log(credential.user);
          this.newUser.mail=mail;
          this.newUser.password=password;
          this.newUser.id=this.db.createId();

          this.StorageUser(this.newUser);

          console.log(this.newUser);

        }).catch(error=>{
          
          console.log(error);
         
        });
  }

  async Login(mail:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(mail,password)
     .then((credential:firebase.auth.UserCredential)=>{

      console.log(credential); 
          console.log(credential.user);
      
     }).catch(error=>{
       console.log(error);
       throw new Error(error);
     });
}

async presentToast(message:string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 3000
  });
  toast.present();
}


}
