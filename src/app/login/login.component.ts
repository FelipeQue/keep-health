import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  loginInfo = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });

  // Abaixo é utilizado o Inject e DOCUMENT (importados mais acima) para evitar o erro de localStorage. Ao que parece o localStorage, por ser da API do navegador, não consegue ser acessado pelo servidor, então por mais o que código ficasse totalmente funcional, eu recebia no terminal a mensagem de erro "ERROR ReferenceError: localStorage is not defined". Encontramos, então, este workaround:

  localStorage;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  };

  ngOnInit(): void {
    this.getStorage();
    // this.createStorage();
  };

  // (A função createStorage se tornou obsoleta com o advento da página de cadastro. Ela foi criada para poder testarmos as funcionalidades do exercício 4 da semana 9.)

  // createStorage() {
  //   let newUser = {
  //     email: "felipe@mail.com",
  //     password: "abcd"
  //   };
  //   let userDatabase = this.getStorage();
  //   if (userDatabase.find((user: { email: string; }) => user.email == newUser.email)) {
  //     console.log("Pessoa usuária já cadastrada.");
  //   } else {
  //     console.log("Pessoa usuária cadastrada com sucesso.");
  //     userDatabase.push(newUser);
  //     this.localStorage?.setItem("userDatabase", JSON.stringify(userDatabase));
  //   }
  // };

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

  // Quando o usuário clicar em ‘Entrar’ será validado se o usuário está cadastrado (comparando o email e senha com os dados da localStorage).
  // Caso o usuário esteja cadastrado, redirecionar para a ‘home'; senão, exibir um alerta dizendo 'Usuário ou senha inválidos’;

  login() {
    // Verifica se os dois campos foram preenchidos:
    if (this.loginInfo.value.userEmail && this.loginInfo.value.userPassword) {

      // Verifica se usuárie existe:
      let userFound = this.checkEmail();
      if (userFound) {

        // Verifica correspondência entre usuárie e senha:
        if (userFound.password == this.loginInfo.value.userPassword) {
          this.router.navigate(["home"]);
          // console.log("Login realizado.")

        } else {
          alert("Senha incorreta. Verifique se digitou corretamente.");
        };
      } else {
        // console.log("E-mail não encontrado.")
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
        let userFound = userDatabase.pop((user: { email: string | null | undefined; }) => user.email == this.loginInfo.value.userEmail);
        userFound.password = "a1b2c4d4";
        userDatabase.push(userFound);
        this.localStorage?.setItem("userDatabase", JSON.stringify(userDatabase));
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
