import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirshipSchemaComponent } from './airship-schema/airship-schema.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { ElementComponent } from './element/element.component';
import { ElementsComponent } from './elements/elements.component';
import { SetupComponent } from './setup/setup.component';
import { StylingComponent } from './styling/styling.component';

const AppRoutes: Routes = [
    { path: '', component: SetupComponent },
    { path: 'styling', component: StylingComponent },
    { path: 'airship-schema', component: AirshipSchemaComponent },
    { path: 'angular-tutorial', component: AngularTutorialComponent },
    { path: 'elements', component: ElementsComponent },
    { path: 'elements/:id', component: ElementComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
