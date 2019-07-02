import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';

// Guards
import { AuthGuard } from '../../shared/guards/auth.guard';
import { NegateAuthGuard } from 'src/app/shared/guards/negate-auth.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NegateAuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }
