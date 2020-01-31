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

                    res.forEach(element=>{
              
                    console.log(element);
                    })
              
            })
       
        }).catch(error=>{
         
          console.log(error);
        });

   

  }

  Edit(id:string){
    console.log(id);
    this.services.presentAlertPrompt(id);
    
  }

  Delete(id:string){
    console.log(id);
    this.services.Delete_Film(id);
    
  }

  addFilm(){
    this.services.CreateFilm();
  }

  
  

}
