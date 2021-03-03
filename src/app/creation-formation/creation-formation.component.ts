import { Component, OnInit , ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Formation } from '../Data/Formation';
import { NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-formation',
  templateUrl: './creation-formation.component.html',
  styleUrls: ['./creation-formation.component.css']
})
export class CreationFormationComponent implements OnInit {
  @ViewChild("ettiquette",{static: false}) div: ElementRef;
  @ViewChild("cin_Candidat",{static: true}) input: ElementRef;
formation:Formation;
mots_cle:String[]=[];
textmot:string="";

constructor(private renderer: Renderer2,private dbService: NgxIndexedDBService,private router:Router) { dbService.currentStore = 'formation'; }

  ngOnInit() {
    if(localStorage.getItem("IsAdmin")==null)
    {
      alert("vous n'êtes pas autorisé");
      this.router.navigate(['']);
    }
  }

  onSubmit(form: NgForm) {
 if(this.mots_cle.length==0)
 {
   alert("merci de mettre des mots cle ");
 }
 else{

for(var i=0;i<this.mots_cle.length;i++)
{
  this.textmot+=this.mots_cle[i]+",";
}
//this.textmot=this.textmot+this.mots_cle[this.mots_cle.length];

  this.formation= new Formation();
  this.formation.Titre_Formation=form.value["Titre"];
  this.formation.Description_Formation=form.value["Description"];
  this.formation.Nb_H_Formation=form.value["Charge_Horaire"];
  //this.formation.Programme_Formation=form.value["Tel_Candidat"];
  this.formation.Difficulte_Formation=form.value["difficulte"];
  this.formation.Mots_Cle=this.textmot;
//this.idb.CreateCandidat(this.candidat);
this.dbService.add( { Titre:this.formation.Titre_Formation,Description:this.formation.Description_Formation,Nb_H:this.formation.Nb_H_Formation,Difficulte:this.formation.Difficulte_Formation,Mots_Cle:this.formation.Mots_Cle}).then(
() => {
  //this.message_valide=true;
  form.reset();
//  this.router.navigate(['/inscription_candidat']);

},
error => {
  //this.message_error=false;
  this.router.navigate(['inscription_candidat']);
}
);
 }
    
}
ajouter_mot(text:string)
{
  const p: HTMLSpanElement = this.renderer.createElement('span');
  const div: HTMLDivElement = this.renderer.createElement('div');
  p.innerHTML = text;
  this.renderer.addClass(p,"label");
  this.renderer.addClass(p,"label-primary");
  this.renderer.addClass(div,"form-group");
  this.renderer.addClass(div,"col-md-2");
  //this.renderer.setAttribute(this.input,"value","");
  div.appendChild(p);
  this.renderer.appendChild(this.div.nativeElement, div)
  this.mots_cle.push(text)



}
}


