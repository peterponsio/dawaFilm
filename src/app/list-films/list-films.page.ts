import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.page.html',
  styleUrls: ['./list-films.page.scss'],
})
export class ListFilmsPage implements OnInit {

 filmes:any;

  constructor(private services:AuthServiceService) { }

  ngOnInit() {

    this.services.getFilms()
        .then((datos)=>{

          datos.valueChanges().subscribe(

            res=>{
               
                    this.filmes=res;
              
            })
       
        }).catch(error=>{
         
          console.log(error);
        });

   

  }

  
  

}
