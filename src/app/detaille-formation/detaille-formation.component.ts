import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-detaille-formation',
  templateUrl: './detaille-formation.component.html',
  styleUrls: ['./detaille-formation.component.css']
})
export class DetailleFormationComponent implements OnInit {
  id:string;
  session_des_formations:Object[]=[];
  session_des_formation:{[k: string]: any}={};
  formation:Object;
  constructor(private dbService: NgxIndexedDBService,private Session_Candidat: NgxIndexedDBService,private Session: NgxIndexedDBService,private formateur: NgxIndexedDBService,private router:Router,private route:ActivatedRoute)
  { 
 route.params.subscribe(params=>{this.id=params['id']});
    dbService.currentStore = 'formation'; 
  
  }



  ngOnInit() {
    this.dbService.getByID(this.id).then(
      person => {
         // console.log(person);
         this.formation=person;
         this.Session.currentStore = 'Session_Formation'; 
         this.Session.getAll().then(
          persons => {
            this.formateur.currentStore = 'formateur'; 
               for(var i=0;i<persons.length;i++)
               {
               if( persons[i]["id_formateur"]==this.id)
               {
                this.formateur.getByID(persons[i]["id_formation"]).then(
                  person => {
                this.session_des_formation.formateur=person;
                  },
                  error => {
                      console.log(error);
                  }
              );
              this.session_des_formation.date_debut=persons[i]["date_debut"];
              this.session_des_formation.date_fin=persons[i]["date_fin"];
              this.session_des_formation.id_formateur=persons[i]["id_formateur"];
              this.session_des_formations.push(this.session_des_formation);
               }
             
               }
             // console.log(person);
             //this.session_des_formations=persons;
            // console.log(persons);
          },
          error => {
              console.log(error);
          }
      );
         
      },
      error => {
          console.log(error);
      }
  );
  }

  inscription(id_formation:number)
  {
   if(localStorage.getItem('Session')==null)
   {
alert("merci de connecter");
this.router.navigate(['/login']);
   }
   else
   {
    this.Session_Candidat.currentStore = 'Candidat_Session_Formation'; 
    this.Session_Candidat.add( {id_candidat:localStorage.getItem('Session'),id_formation:id_formation,Date_inscription:new Date()}).then(
      () => {
        //this.message_valide=true;
        //form.reset();
       alert("c bon");
    
      },
      error => {
        //this.message_error=false;
        this.router.navigate(['inscription_candidat']);
      }
    );
   }
  }


}
