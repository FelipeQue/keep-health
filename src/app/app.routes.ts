import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';
import { profile } from 'console';
import { ProfileComponent } from './profile/profile.component';

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
    // {
    //     path: "sidebar",
    //     component: SidebarComponent,
    // },
    {
        path: "diet",
        children: [
            { path: "",component: DietComponent },
            { path: ":id", component: DietDetailComponent },
        ]
    },
    {
        path: "profile",
        component: ProfileComponent,
    },

];