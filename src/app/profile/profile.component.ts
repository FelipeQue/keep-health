import { Component } from '@angular/core';
import { CmToMetersPipe } from '../pipes/cm-to-meters.pipe';
import { AgeFromDatePipe } from '../pipes/age-from-date.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmToMetersPipe, AgeFromDatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;

  getStorage() {
    const users = localStorage.getItem("userDatabase");
    if (!!users) {
      return JSON.parse(users);
    } else {
      console.log("Não foi encontrado nenhum usuário.")
      return [];
    };
  };

  checkUserId(id: any) {
    let userDatabase = this.getStorage();
    return userDatabase.find((user: { id: string | null | undefined; }) => user.id == id);
  };

  constructor(){
    this.user = this.checkUserId("teste123");
  };
  




}