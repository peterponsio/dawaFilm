import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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

    see(){
   
      if(this.tipo=="password"){
        this.tipo="text";
      }else{
        this.tipo="password";
      }


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
       this.router.navigateByUrl('/tabs');
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


  constructor(private router : Router) {}

}