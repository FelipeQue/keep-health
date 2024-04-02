import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './shared/guards/auth.guard';

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
        children: [
            { path: "",component: DietComponent },
            { path: ":id", component: DietDetailComponent },
        ],
        canActivate: [authGuard],
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [authGuard],
    },

];