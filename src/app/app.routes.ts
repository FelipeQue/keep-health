import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './shared/guards/auth.guard';
import { dietChildGuard } from './shared/guards/diet-child.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuard],
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "cadastro",
        component: CadastroComponent,
    },
    {
        path: "signup",
        component: CadastroComponent,
    },
    {
        path: "diet",
        component: DietComponent,
        canActivate: [authGuard],
    },
    {
        path: "diet",
        canActivateChild: [dietChildGuard],
        loadChildren:
        ()=> import('../app/diet/diet.module').then(m => m.DietModule),
        
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [authGuard],
    },

];