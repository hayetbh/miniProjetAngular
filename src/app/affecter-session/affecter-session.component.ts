import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { SessionFormation } from '../Data/Session-Formation';
import { Formation } from '../Data/Formation';
import { Formateur } from '../Data/Formateur';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-affecter-session',
  templateUrl: './affecter-session.component.html',
  styleUrls: ['./affecter-session.component.css']
})
export class AffecterSessionComponent implements OnInit {
session_formation:SessionFormation;
formateurs:Object[];
formations:Object[];
formation:Formation;

  constructor(private dbService: NgxIndexedDBService,private formateurserv: NgxIndexedDBService,private Save_Session: NgxIndexedDBService,private router:Router)
   { dbService.currentStore = 'formation'; }

  ngOnInit() {
   if(localStorage.getItem("IsAdmin")!=null)
   {
    this.dbService.getAll().then(
      forma => { 
        this.formations=forma;
        //console.log(forma);
        this.formateurserv.currentStore = 'formateur';  

        this.formateurserv.getAll().then(
          formas => { 
            this.formateurs=formas;
            //console.log(forma);
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
   else
   {

    alert("vous n'êtes pas autorisé merci de déconnecter les comptes");
          this.router.navigate(['']);
   }

 
}
sauvgarder(format:number,nom_fo:number)
{
  
  this.Save_Session.currentStore = 'Session_Formation';  

  this.Save_Session.getAll().then(
    formas => { 
      this.formateurs=formas;
      //console.log(forma);
    },  
    error => {
        console.log(error);
    }
);
  alert(format);
  alert(nom_fo);
}



onSubmit(form: NgForm) {
  this.session_formation=new SessionFormation();
  this.session_formation.id_formateur= form.value["nomform"];
  this.session_formation.id_formation= form.value["listeform"];
  this.session_formation.Date_Debut= form.value["date_debut"];
  this.session_formation.Date_Fin= form.value["date_fin"];
  this.session_formation.Planing= form.value["planing"];
  console.log(this.session_formation);
  this.Save_Session.currentStore = 'Session_Formation';  
  this.Save_Session.add( { id_formateur:this.session_formation.id_formateur,id_formation:this.session_formation.id_formation,date_debut: this.session_formation.Date_Debut,date_fin:this.session_formation.Date_Fin,planning: this.session_formation.Planing  }).then(
    () => {
      //this.message_valide=true;
      form.reset();
    this.router.navigate(['/inscription_candidat']);
  
    },
    error => {
      //this.message_error=false;
      this.router.navigate(['inscription_candidat']);
    }
  );
  }
}
