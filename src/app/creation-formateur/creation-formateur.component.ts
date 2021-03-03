import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { Formateur } from '../Data/Formateur';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation-formateur',
  templateUrl: './creation-formateur.component.html',
  styleUrls: ['./creation-formateur.component.css']
})
export class CreationFormateurComponent implements OnInit {
formateur:Formateur;
  constructor(private dbService: NgxIndexedDBService,private router:Router) { dbService.currentStore = 'formateur'; }

  ngOnInit() {
    if(localStorage.getItem("IsAdmin")==null)
    {
      alert("vous n'êtes pas autorisé");
      this.router.navigate(['']);
    }
  }


  onSubmit(form: NgForm) {
 
    this.formateur= new Formateur();
    this.formateur.Nom_Formateur=form.value["nom_formateur"];
    this.formateur.Pren_Formateur=form.value["prenom_Formateur"];
    this.formateur.Email_Formateur=form.value["email_Formateur"];
    this.formateur.Num_Tel_Formateur=form.value["tel_Formateur"];
    this.formateur.Cin_Formateur=form.value["cin_Formateur"];
    this.formateur.Tarif_H_Formateur=form.value["Tarif_par_h"];
    this.formateur.specialite=form.value["specialite"];
    this.formateur.Password_Formateur=form.value["mot_de_passe"];
//this.idb.CreateCandidat(this.candidat);
this.dbService.add( { name:this.formateur.Nom_Formateur,pren:this.formateur.Pren_Formateur,email:this.formateur.Email_Formateur,password:this.formateur.Password_Formateur,cin:this.formateur.Cin_Formateur,photo:"",cv:"",tarif:this.formateur.Tarif_H_Formateur  }).then(
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
