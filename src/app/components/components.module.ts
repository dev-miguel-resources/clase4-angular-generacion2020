import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


//RUTAS
import { ComponentsRoutingModule } from './components-routing.module';


//COMPONENTES
import { HomeComponent } from './home/home.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class ComponentsModule { }
