import { Component } from '@angular/core';
import { CmToMetersPipe } from '../pipes/cm-to-meters.pipe';
import { AgeFromDatePipe } from '../pipes/age-from-date.pipe';
import { AddressService } from '../services/address.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmToMetersPipe, AgeFromDatePipe, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;
  address: any | undefined;

  getStorage() {
    const users = localStorage.getItem("userDatabase");
    if (!!users) {
      return JSON.parse(users);
    } else {
      console.log("Não foi encontrado nenhum usuário.")
      return [];
    };
  };

  checkLoggedUser() {
    let userDatabase = this.getStorage();
    return userDatabase.find((user: { auth: boolean | null | undefined; }) => user.auth == true);
  };

  constructor(private addressService: AddressService, private router: Router){
    this.user = this.checkLoggedUser();
    if (!this.user) {
      alert("Please log in.");
      this.router.navigate(["login"]);
    }

  };

  searchAddress() {
    this.addressService.getAdress(this.user.cep).subscribe(
      {
        next: (response): void => {
          this.address = response;
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }
  




}