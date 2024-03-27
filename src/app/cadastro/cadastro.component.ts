import { Component, Inject, InjectionToken } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {

  signupInfo = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userDob: new FormControl(''),
    userWeight: new FormControl(0),
    userHeight: new FormControl(0),
    userCep: new FormControl(''),
    userPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  localStorage;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  };


  // Botão cadastrar: se clicado, com os campos todos preenchidos e os inputs Senha e Confirmar Senha com os mesmos valores, irá cadastrar o usuário informado (colocando seu email e senha na localStorage na lista de usuários cadastrados)

  signup() {
    // Validar se todos os campos foram preenchidos:
    if (this.signupInfo.value.userName && this.signupInfo.value.userEmail && this.signupInfo.value.userDob && this.signupInfo.value.userWeight && this.signupInfo.value.userHeight && this.signupInfo.value.userCep && this.signupInfo.value.userPassword && this.signupInfo.value.confirmPassword) {

      // Validar se as senha conferem:
      if (this.signupInfo.value.userPassword === this.signupInfo.value.confirmPassword) {

        // Validar se já existe cadastro com o e-mail preenchido:
        let userDatabase = this.getStorage();
        if (userDatabase.find((user: { email: string; }) => user.email == this.signupInfo.value.userEmail)) {
          alert("Já existe um cadastro com este e-mail. Caso tenha esquecido a senha, preencha seu e-mail na tela de login e clique em ’Esqueci a senha.’");
        } else {
          this.addUser(this.signupInfo.value.userName, this.signupInfo.value.userEmail, this.signupInfo.value.userDob, this.signupInfo.value.userWeight, this.signupInfo.value.userHeight, this.signupInfo.value.userCep, this.signupInfo.value.userPassword);
          alert(`O cadastro da pessoa com o e-mail ${this.signupInfo.value.userEmail} foi realizado com sucesso!`);
          // Não esquecer de limpar os campos depois do cadastro realizado:
          this.signupInfo.reset();
        }
      } else {
        alert("As senhas nos campos ‘Senha’ e ‘Confirmar Senha’ devem ser idênticas.");
      };
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  // Função que acrescenta pessoa usuária no localStorage (invocada na função signup()):
  addUser(name: string, email: string, dateOfBirth: string, weight: number, height: number, cep: string, password: string) {
    const newUser = {
      name: name,
      email: email,
      dateOfBirth: dateOfBirth,
      weightKg: weight,
      heightCm: height,
      cep: cep,
      password: password,
      auth: false,
    };
    let userDatabase = this.getStorage();
    userDatabase.push(newUser);
    localStorage.setItem("userDatabase", JSON.stringify(userDatabase));
  };

  // Função que puxa os dados do localStorage (ou cria um array vazio na ausência de um):
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


  
  // Fim do componente
}
