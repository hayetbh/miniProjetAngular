import { Injectable } from '@angular/core';
import { IndexedDBAngular } from "indexeddb-angular";
import {AppComponent} from '../app.component';
import { Candidat } from '../Data/Candidat';
@Injectable({
  providedIn: 'root'
})
export class IdbService {
  private db = new IndexedDBAngular('myDb', 1);
  constructor() {this.db.createStore(1, this.createCollections); }
  createCollections(db:any) {
   let objectStore= db.currentTarget.result.createObjectStore('candidat', { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("pren", "pren", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("password", "password", { unique: false });
    objectStore.createIndex("cin", "cin", { unique: true });
    objectStore.createIndex("photo", "photo", { unique: false });
    objectStore.createIndex("cv", "cv", { unique: false });
   // db.currentTarget.result.createObjectStore('exampleCollection2');
}

CreateCandidat(candidat:Candidat)
{
  this.db.add('candidat', { name:candidat.Nom_Candidat,pren:candidat.Pren_Candidat,email:candidat.Email_Candidat,password:candidat.Password_Candidat,cin:candidat.Cin_Candidat,photo:"",cv:""  }).then(() => {
    // Do something after the value was added
}, (error) => {
    console.log(error);
});

}

}

