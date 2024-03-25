import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor (private router: Router) {};

  userDatabase: any;

  signOut() {
    this.userDatabase = localStorage.getItem("userDatabase");
    this.userDatabase  = JSON.parse(this.userDatabase);
    const updatedUsers = this.userDatabase.map((user: { auth: boolean; }) => {
      if (user.auth === true) {
        return { ...user, auth: false };
      }
      return user;
    });
    this.userDatabase = updatedUsers;
    localStorage.setItem("userDatabase", JSON.stringify(this.userDatabase));
    this.router.navigate(["login"]);
    console.log("Logout realizado.")
  }

}
