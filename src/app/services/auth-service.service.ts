import { Users } from './../model/user.interface';

import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { error, stringify } from '@angular/compiler/src/util';
import { ToastController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { User } from 'firebase';

import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth:AngularFireAuth,public toastController: ToastController,private db:AngularFirestore) {
   
   }
   
   newUser:Users={

    id:"",
    mail:"",
    password:"",
  
   }

  


   StorageUser(newUser){

      this.db.doc("/users/"+newUser.id ).set(newUser);

   }

  async getUserData(mailo:string){
      let userData:AngularFirestoreCollection=this.db.collection<Users>('users');

      userData.valueChanges().subscribe(

          res=>{
              res.forEach(element=>{
              
                if(element.mail==mailo){
                  console.log(element);
                }
              
              })
          })}

          async getFilms(){
            let userData:AngularFirestoreCollection=this.db.collection<Users>('films');
      
                  return userData;

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
