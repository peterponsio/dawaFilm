import { AuthServiceService } from './../services/auth-service.service';
import { Component, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { AlertController } from '@ionic/angular';
import { stringify, dashCaseToCamelCase } from '@angular/compiler/src/util';
import { parse } from 'querystring';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { database } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  

    show:string;

    datos:any;

    entrar(){
      console.log("dad");
      this.router.navigateByUrl("home");
    }

    close(){
      console.log("cerró");
    }


   
    ngOnInit(){
      
      this.datos=JSON.parse(sessionStorage.getItem("user")); 
  
      console.log(this.datos.mail);

      this.show=this.datos.mail;

    }
    

  constructor( private router: Router,public alertController: AlertController,private servicio:AuthServiceService) {}

}

