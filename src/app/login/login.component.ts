import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

  loginInfo = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });

  users: any[] = [];

  localStorage;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  };

  ngOnInit(): void {
    this.users = this.getStorage();
    this.createUser();
  };

  newUser: any = {
    name: "Felipe",
    email: "felipe@mail.com",
    dateOfBirth: "1983-10-21",
    cep: "88053-655",
    password: "abcd",
    weightKg: 80,
    heightCm: 186,
    auth: false,
  };

  createUser() {
    let userDatabase = this.getStorage();
    if (userDatabase.find((user: { email: string; }) => user.email == this.newUser.email)) {
      // Pessoa usuária placeholder já estava cadastrada.
    } else {
      userDatabase.push(this.newUser);
      this.localStorage?.setItem("userDatabase", JSON.stringify(userDatabase));
      // Pessoa usuária placeholder cadastrada com sucesso.
    }

  };


  getStorage() {
    const emptyDatabase: string[] = [];
    const users = this.localStorage?.getItem("userDatabase");
    if (!!users) {
      return JSON.parse(users);
    } else {
      this.localStorage?.setItem("userDatabase", JSON.stringify(emptyDatabase));
      return [];
    };
  };

  login() {
    // Verifica se os dois campos foram preenchidos:
    if (this.loginInfo.value.userEmail && this.loginInfo.value.userPassword) {

      // Verifica se usuárie existe:
      let userFound = this.checkEmail();
      if (userFound) {

        // Verifica correspondência entre usuárie e senha:
        if (userFound.password == this.loginInfo.value.userPassword) {
          this.users = this.getStorage();
          //Aqui quero deixar uma informação no localStorage sobre qual pessoa está logada:
          const updatedUsers = this.users.map((user) => {
            if (user.email === userFound.email) {
              return { ...user, auth: true };
            }
            return user;
          });
          this.users = updatedUsers;
          this.localStorage?.setItem("userDatabase", JSON.stringify(this.users));
          this.router.navigate(["home"]);
        } else {
          alert("Senha incorreta. Verifique se digitou corretamente.");
        };
      } else {
        alert("Não encontramos uma conta associada a esse e-mail. Verifique se digitou corretamente ou crie uma nova conta.")
      };
    } else {
      alert("Por favor, preencha todos os campos.");
    };
  };

  checkEmail() {
    let userDatabase = this.getStorage();
    return userDatabase.find((user: { email: string | null | undefined; }) => user.email == this.loginInfo.value.userEmail);
  };

  // Caso o usuário clique no botão ‘Esqueci a senha’ a senha do usuário será alterada para a senha padrão ‘a1b2c4d4’ e o usuário será avisado para prosseguir utilizando essa senha;
  forgotPassword() {
    if (this.loginInfo.value.userEmail) {
      let userFound = this.checkEmail();
      if (userFound) {
        let userDatabase = this.getStorage();
        const updatedUsers = userDatabase.map((user: { email: any; }) => {
          if (user.email === userFound.email) {
            return { ...user, password: "a1b2c4d4" };
          }
            return user;
        });
        this.localStorage?.setItem("userDatabase", JSON.stringify(updatedUsers));
        alert("Sua senha foi alterada para a senha padrão ‘a1b2c4d4’. Faça seu login utilizando essa senha.")
      } else {
        alert("Pessoa usuária não cadastrada.")
      }
    } else {
      alert("Preencha o campo e-mail.")
    };
  };

  // Fim do componente
};
