import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { MovieService } from 'src/app/services/movie.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutAppComponent } from './components/shared/layout-app/layout-app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutAppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
