import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "cadastro",
        component: CadastroComponent,
    },

];