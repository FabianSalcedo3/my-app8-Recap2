import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneComponent } from './gestione/gestione.component';
import { GestioneStudentiComponent } from './gestione/gestione-studenti/gestione-studenti.component';
import { StudentiIscrittiComponent } from './gestione/gestione-studenti/studenti-iscritti/studenti-iscritti.component';
import { StudenteInfoComponent } from './gestione/gestione-studenti/studente-info/studente-info.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { ActiveUsersComponent } from './login-form/active-users/active-users.component';
import { InactiveUsersComponent } from './login-form/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneComponent,
    GestioneStudentiComponent,
    StudentiIscrittiComponent,
    StudenteInfoComponent,
    LoginFormComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
