import { Component, OnInit } from '@angular/core';
import {NgForm} from  '@angular/forms';
import { Candidat } from '../Data/Candidat';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription-candidat',
  templateUrl: './inscription-candidat.component.html',
  styleUrls: ['./inscription-candidat.component.css']
})
export class InscriptionCandidatComponent implements OnInit {
  candidat:Candidat;
  //idb:IdbService;
 message_error:Boolean;
 message_valide:Boolean;
  constructor(private dbService: NgxIndexedDBService,private router:Router) { dbService.currentStore = 'candidat'; }




  ngOnInit() {
    //this.idb= new IdbService();
  }

  onSubmit(form: NgForm) {
 
    this.candidat= new Candidat();
    this.candidat.Nom_Candidat=form.value["NomCandidat"];
    this.candidat.Pren_Candidat=form.value["Prenom_Candidat"];
    this.candidat.Email_Candidat=form.value["Email_Candidat"];
    this.candidat.Num_Tel_Candidat=form.value["Tel_Candidat"];
    this.candidat.Cin_Candidat=form.value["Cin_Candidat"];
    this.candidat.Password_Candidat=form.value["passwd"];
//this.idb.CreateCandidat(this.candidat);
this.dbService.add( { name:this.candidat.Nom_Candidat,pren:this.candidat.Pren_Candidat,email:this.candidat.Email_Candidat,password:this.candidat.Password_Candidat,cin:this.candidat.Cin_Candidat,photo:"",cv:""  }).then(
  () => {
    this.message_valide=true;
    form.reset();
  this.router.navigate(['/inscription_candidat']);

  },
  error => {
    this.message_error=true;
    this.router.navigate(['/inscription_candidat']);
  }
);
}
}
