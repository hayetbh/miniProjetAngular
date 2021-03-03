import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechercheUneFormationComponent } from './recherche-une-formation/recherche-une-formation.component';
import { EspaceCandidatComponent } from './espace-candidat/espace-candidat.component';
import { EspaceFormateurComponent } from './espace-formateur/espace-formateur.component';
import { LoginComponent } from './login/login.component';
import { Mots } from './Data/Mots';
import { Candidat } from './Data/Candidat';
import { Formateur } from './Data/Formateur';
import { Formation } from './Data/Formation';
import { SessionFormation } from './Data/Session-Formation';
import { Specialite } from './Data/Specialite';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { CreationFormationComponent } from './creation-formation/creation-formation.component';
import { CreationFormateurComponent } from './creation-formateur/creation-formateur.component';
import { AffecterSessionComponent } from './affecter-session/affecter-session.component';
import { ListeDesCndidatInscritComponent } from './liste-des-cndidat-inscrit/liste-des-cndidat-inscrit.component';
import { DetailleFormationComponent } from './detaille-formation/detaille-formation.component';
import { ListeFormationFormateurComponent } from './liste-formation-formateur/liste-formation-formateur.component';
import { ListeFormationCandidatComponent } from './liste-formation-candidat/liste-formation-candidat.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
//import { LoginFormateurComponent } from './login-formateur/login-formateur.component';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'candidat',
    storeConfig: { keyPath: 'id', autoIncrement:true  },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'pren', keypath: 'pren', options: { unique: false }},
      { name: 'email', keypath: 'email', options: { unique: true }},
      { name: 'password', keypath: 'password', options: { unique: false }},
      { name: 'cin', keypath: 'cin', options: { unique: true }},
      { name: 'photo', keypath: 'photo', options: { unique: false }},
      { name: 'cv', keypath: 'cv', options: { unique: false }}
    ],

    
  },
  {
    store: 'formation',
    storeConfig: { keyPath: 'id', autoIncrement:true  },
    storeSchema: [
      { name: 'Titre', keypath: 'Titre', options: { unique: false } },
      { name: 'Description', keypath: 'Description', options: { unique: false }},
      { name: 'Nb_H', keypath: 'Nb_H', options: { unique: false }},
      { name: 'Difficulte', keypath: 'Difficulte', options: { unique: false }},
      { name: 'Mots_Cle', keypath: 'Mots_Cle', options: { unique: true }},
    ],
  },
  {
    store: 'formateur',
    storeConfig: { keyPath: 'id', autoIncrement:true  },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'pren', keypath: 'pren', options: { unique: false }},
      { name: 'email', keypath: 'email', options: { unique: true }},
      { name: 'tarif_h', keypath: 'tarif_h', options: { unique: false }},
      { name: 'password', keypath: 'password', options: { unique: false }},
      { name: 'cin', keypath: 'cin', options: { unique: true }},
      { name: 'photo', keypath: 'photo', options: { unique: false }},
      { name: 'cv', keypath: 'cv', options: { unique: false }}
    ],

    
  },
  {
    store: 'Session_Formation',
    storeConfig: { keyPath: 'id', autoIncrement:true  },
    storeSchema: [
      { name: 'date_debut', keypath: 'date_debut', options: { unique: false } },
      { name: 'date_fin', keypath: 'date_fin', options: { unique: false }},
      { name: 'planning', keypath: 'planning', options: { unique: false }},
      { name: 'id_formateur', keypath: 'id_formateur', options: { unique: false }},
      { name: 'id_formation', keypath: 'id_formation', options: { unique: false }},
    ]

    
  }
  ,
  {
    store: 'Candidat_Session_Formation',
    storeConfig: { keyPath: 'id', autoIncrement:true  },
    storeSchema: [
      { name: 'id_candidat', keypath: 'id_candidat', options: { unique: true } },
      { name: 'id_formation', keypath: 'id_formation', options: { unique: true }},
      { name: 'Date_inscription', keypath: 'Date_inscription', options: { unique: false }},
  
    ]

    
  }
]

};

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    RechercheUneFormationComponent,
    EspaceCandidatComponent,
    EspaceFormateurComponent,
    LoginComponent,
    InscriptionCandidatComponent,
    AdminComponent,
    MenuComponent,
    CreationFormationComponent,
    CreationFormateurComponent,
    AffecterSessionComponent,
    ListeDesCndidatInscritComponent,
    DetailleFormationComponent,
    ListeFormationFormateurComponent,
    ListeFormationCandidatComponent,
    MenuAdminComponent,
    //LoginFormateurComponent
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,FormsModule, NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 


}
