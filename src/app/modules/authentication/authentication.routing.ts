import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
    { path:'', component: LoginComponent }
];
export const authenticationRouting: ModuleWithProviders = RouterModule.forChild(routes);