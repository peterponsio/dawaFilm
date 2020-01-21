import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { error, stringify } from '@angular/compiler/src/util';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth:AngularFireAuth,public toastController: ToastController) {

   }

  async createUser(mail:string,password:string){
       return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
        .then((credential:firebase.auth.UserCredential)=>{
          console.log(credential); 
          console.log(credential.user);
        }).catch(error=>{
          console.log(error);
          throw new Error(error);
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
