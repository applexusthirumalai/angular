import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [       
    { path: '', loadChildren: () => AuthenticationModule },
    { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard] }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
