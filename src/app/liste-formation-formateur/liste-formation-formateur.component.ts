import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-formation-formateur',
  templateUrl: './liste-formation-formateur.component.html',
  styleUrls: ['./liste-formation-formateur.component.css']
})
export class ListeFormationFormateurComponent implements OnInit {
ListeDesFormation:Object[]=[];
formation:{[k: string]: any}={};
  constructor(private dbService: NgxIndexedDBService,private Formation: NgxIndexedDBService,private router:Router)
  { dbService.currentStore = "Session_Formation"; }

  ngOnInit() {
  
    this.dbService.getAll().then(
      person => {
          //console.log(person);
          this.Formation.currentStore = "formation"; 
          for(var i=0;i<person.length;i++)
          {
            if(person[i]["id_formateur"]==  localStorage.getItem("Session_Formateur"))
            {
              this.formation.date_debut=person[i]["date_debut"];
              this.formation.date_fin=person[i]["date_fin"];
              this.Formation.getByID(person[i]["id_formation"]).then(
                p=>{
                  if(p["Difficulte"]==1){this.formation.diff="débutant";}
                   else if(p["Difficulte"]==2){this.formation.diff="intermédiaire";}
                   else {this.formation.diff="avancé";}
                   
                   this.formation.titre= p["Titre"];
                 this.ListeDesFormation.push( this.formation);               },
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
