import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-formation-candidat',
  templateUrl: './liste-formation-candidat.component.html',
  styleUrls: ['./liste-formation-candidat.component.css']
})
export class ListeFormationCandidatComponent implements OnInit {
  ListeDesFormation:Object[]=[];
  formation:{[k: string]: any}={};
    constructor(private dbService: NgxIndexedDBService,private FormationSess: NgxIndexedDBService,private Form: NgxIndexedDBService,private router:Router)
    { dbService.currentStore = "Candidat_Session_Formation"; }
  
    ngOnInit() {
    
      this.dbService.getAll().then(
        person => {
            
           
            for(var i=0;i<person.length;i++)
            {
              if(person[i]["id_candidat"]==  localStorage.getItem("Session"))
              {
                this.FormationSess.currentStore = "Session_Formation"; 
                this.formation.date_inscription=person[i]["Date_inscription"];
                   this.FormationSess.getByIndex("id_formation",person[i]["id_formation"]).then(
                     f=>{
                      this.Form.currentStore = "formation"; 
                      this.formation.date_debut=f["date_debut"];
                      this.formation.date_fin=f["date_fin"];


                      this.Form.getByID(f["id_formation"]).then(
                        p=>{
                       console.log(p);
                          if(p["Difficulte"]==1){this.formation.diff="débutant";}
                           else if(p["Difficulte"]==2)
                           {this.formation.diff="intermédiaire";}
                           else {this.formation.diff="avancé";}
                           
                           this.formation.titre= p["Titre"];
                         this.ListeDesFormation.push( this.formation);               },
                        error => {
                          console.log(error);
                      }
                      )



                     },
                     error => {
                      console.log(error);
                  }
                   )

 

              
              }
             
            }
        },
        error => {
            console.log(error);
        }
    );
    }
  
  }
  