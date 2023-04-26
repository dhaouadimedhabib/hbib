import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './back/navbar/navbar.component';
import { SidebarComponent } from './back/sidebar/sidebar.component';
import { ContentComponent } from './back/content/content.component';
import { NavbarfrontComponent } from './front/navbarfront/navbarfront.component';
import { ContentfrontComponent } from './front/contentfront/contentfront.component';
import { FooterComponent } from './front/footer/footer.component';
import { ListeplanComponent } from './back/planback/listeplan/listeplan.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    NavbarfrontComponent,
    ContentfrontComponent,
    FooterComponent,
    ListeplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
