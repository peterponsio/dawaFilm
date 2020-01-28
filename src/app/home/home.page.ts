import { AuthServiceService } from './../services/auth-service.service';
import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
import { parse } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


    //disableinput:boolean=true;

    putforget:string="you forgot the password";

    validateMail:string="";

    validatePass:string="";

    mail:string="";

    password:string="";

    bready:boolean=false;

    tipo:string="password";

    seepass(){
   
      if(this.tipo=="password"){
        this.tipo="text";
      }else{
        this.tipo="password";
      }


    }

    regis(){
      this.mail="";
      this.password="";

       this.router.navigateByUrl('/register');
    }

/////////////////////////////////////////////////////

async presentAlertPrompt() {
  const alert = await this.alertController.create({
    header: 'Forgot',
    inputs: [
      {
        name: 'correo',
        type: 'email',
        placeholder: 'Email'
      },
   
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (datos) => {

          console.log(datos);
        }
      }
    ]
  });

  await alert.present();
}



//////////////////////////////////////////////////



    onClickForgot(){
      console.log("forgot");
    }


    check(){
   console.log("keyup");
this.bready=true;
      this.checkUser();
      this.checkPass();
      if( this.mail == ""){
       
          this.validateMail="Fill the email";
      }else if (this.mail !== ""){
        this.validateMail="";
         
      }
     if(this.password == ""){
          this.validatePass="Fill the password";
     }else{
        this.validatePass="";
     }
     if(this.mail !=="" && this.password!==""){

      
      console.log("Entrando");
    
      this.servicio.Login(this.mail,this.password)
      .then((datos)=>{
        console.log(datos); 
       let user_data= {
          email: this.mail,
          pass: this.password
        };

        this.servicio.getUserData(this.mail);

      sessionStorage.setItem("user", JSON.stringify(user_data) );
      console.log((sessionStorage.getItem("user")));
       this.servicio.presentToast("esta bien")

       this.router.navigateByUrl('list-films');
       
      //   this.mail="";
      // this.password="";
      }).catch(error=>{
        console.log(error);
        this.servicio.presentToast("esta mal")
      });
     }
    }

    checkUser(){
      console.log("keyup");
      if(this.bready){
        if( this.mail == ""){
          
          this.validateMail="Fill the email";
      }else if (this.mail !== ""){
        this.validateMail="";
         
      }
   
      }
       
       }

       checkPass(){
        console.log("keyup");

        if(this.bready){
          if(this.password == ""){
            this.validatePass="Fill the password";
       }else{
          this.validatePass="";
       }
        }

   
        
         }


    changeString() {

      if(this.putforget == "you forgot the password"){

           this.putforget="text changed";

      }else{

        this.putforget="you forgot the password";

      } 

    };


  constructor(private router : Router,public alertController: AlertController,private servicio:AuthServiceService) {}

}