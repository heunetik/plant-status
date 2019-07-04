import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

// Guards
import { AuthGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }
