import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { StylingComponent } from './styling/styling.component';
import { AirshipSchemaComponent } from './airship-schema/airship-schema.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { ElementsComponent } from './elements/elements.component';
import { ElementComponent } from './element/element.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    StylingComponent,
    AirshipSchemaComponent,
    AngularTutorialComponent,
    ElementsComponent,
    ElementComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
