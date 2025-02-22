import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyseModule } from "./analyse/analyse.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {GalleryComponent} from "./analyse/components/gallery/gallery.component";
import {ImageContainerComponent} from "./analyse/components/image-container/image-container.component";
import {ImageAnalyzerComponent} from "./analyse/components/image-analyzer/image-analyzer.component";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScrollingModule } from '@angular/cdk/scrolling';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatSliderModule } from '@angular/material/slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './analyse/components/login/login.component';
import { RegisterComponent } from './analyse/components/register/register.component';
import { NavbarComponent } from './analyse/components/navbar/navbar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AnalyseModule,
        RouterModule,
        FontAwesomeModule,
        FormsModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        //MatAutocompleteModule
    ],
  exports: [
    RouterModule
  ],
  providers: [GalleryComponent, ImageAnalyzerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
