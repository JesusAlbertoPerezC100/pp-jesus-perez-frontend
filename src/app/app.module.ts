import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './servicio/persona.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
