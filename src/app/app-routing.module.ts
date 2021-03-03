import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {LoginComponent} from './login/login.component';
import {InscriptionCandidatComponent} from './inscription-candidat/inscription-candidat.component';
import {CreationFormationComponent} from './creation-formation/creation-formation.component';
import {AffecterSessionComponent } from './affecter-session/affecter-session.component';
import {CreationFormateurComponent } from './creation-formateur/creation-formateur.component';
import {ListeDesCndidatInscritComponent } from './liste-des-cndidat-inscrit/liste-des-cndidat-inscrit.component';
import {DetailleFormationComponent } from './detaille-formation/detaille-formation.component';
import {RechercheUneFormationComponent } from './recherche-une-formation/recherche-une-formation.component';
import {EspaceCandidatComponent } from './espace-candidat/espace-candidat.component';
import {EspaceFormateurComponent } from './espace-formateur/espace-formateur.component';
import {ListeFormationFormateurComponent } from './liste-formation-formateur/liste-formation-formateur.component';
import {ListeFormationCandidatComponent } from './liste-formation-candidat/liste-formation-candidat.component';
import {AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription_candidat', component: InscriptionCandidatComponent },
  { path: 'Ajouter_Formation', component: CreationFormationComponent },
  { path: 'Affecter_session', component: AffecterSessionComponent },
  { path: 'Ajouter_Formateur', component: CreationFormateurComponent },
  { path: 'Liste_Des_Candidats', component: ListeDesCndidatInscritComponent },
  { path: 'Detaille_Formation/:id', component: DetailleFormationComponent },
  { path: 'Recherche', component: RechercheUneFormationComponent },
  { path: 'Candidat', component: EspaceCandidatComponent },
  { path: 'login_Formateur', component: EspaceFormateurComponent },
  { path: 'Liste_Formation-Formateur', component: ListeFormationFormateurComponent },
  { path: 'Liste_Formation-Candidat', component: ListeFormationCandidatComponent },
  { path: "admin/:id/:id2", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
