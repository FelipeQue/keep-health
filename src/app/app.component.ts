import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keep-health';

  foodList: any[] = [

      // {
      //    id: 1,
      //    name: "Abacate",
      //    description: "...",
      //    qttCalories: 0,
      //    qttDaysFeed: 3,
      //    imageLink: ""
      //  },

       {
        id: 1,
        name: "batata",
        description: "Tubérculo comestível rico em carboidratos e versátil na culinária.",
        image: "https://bing.com/th?id=OIP.-CshCCluPxq7xGz2-G_USgHaE5",
        calories: 92.7,
        serving_size_g: 100,
        fat_total_g: 0.1,
        fat_saturated_g: 0,
        protein_g: 2.5,
        sodium_mg: 10,
        potassium_mg: 70,
        cholesterol_mg: 0,
        carbohydrates_total_g: 21,
        fiber_g: 2.2,
        sugar_g: 1.2
      },
      {
        id: 2,
        name: "morango",
        description: "Fruta vermelha, suculenta e doce, frequentemente usada em sobremesas.",
        image: "https://bing.com/th?id=OIP.IQXrP4fSkwtGImpZf1Av4AHaFj",
        calories: 31.9,
        serving_size_g: 100,
        fat_total_g: 0.3,
        fat_saturated_g: 0,
        protein_g: 0.7,
        sodium_mg: 0,
        potassium_mg: 23,
        cholesterol_mg: 0,
        carbohydrates_total_g: 7.7,
        fiber_g: 2,
        sugar_g: 4.9
      },
      {
        id: 3,
        name: "lasanha",
        description: "Prato italiano composto por camadas de massa, queijo e molho, podendo incluir carne ou vegetais.",
        image: "https://bing.com/th?id=OIP.ErFlHku_Rs0tmPZ1ni5YsgHaE8",
        calories: 157.7,
        serving_size_g: 100,
        fat_total_g: 8.5,
        fat_saturated_g: 4,
        protein_g: 11.4,
        sodium_mg: 407,
        potassium_mg: 159,
        cholesterol_mg: 42,
        carbohydrates_total_g: 9.2,
        fiber_g: 1,
        sugar_g: 2.9
      },
      {
        id: 4,
        name: "maçã",
        description: "Fruta pomácea de sabor que varia de doce a ácido, consumida fresca ou em receitas.",
        image: "https://bing.com/th?id=OIP.o7rlPOWm1Zn11QSEms6-VgHaHa",
        calories: 53,
        serving_size_g: 100,
        fat_total_g: 0.2,
        fat_saturated_g: 0,
        protein_g: 0.3,
        sodium_mg: 1,
        potassium_mg: 11,
        cholesterol_mg: 0,
        carbohydrates_total_g: 14.1,
        fiber_g: 2.4,
        sugar_g: 10.3
      },
      {
        id: 5,
        name: "pera",
        description: "Fruta de polpa doce e granulosa, apreciada por seu sabor suave e textura.",
        image: "https://bing.com/th?id=OIP.uXP01zK0pirJyTyt39NQcAHaHa",
        calories: 56.7,
        serving_size_g: 100,
        fat_total_g: 0.1,
        fat_saturated_g: 0,
        protein_g: 0.4,
        sodium_mg: 1,
        potassium_mg: 11,
        cholesterol_mg: 0,
        carbohydrates_total_g: 14.9,
        fiber_g: 3.1,
        sugar_g: 9.8
      },
      {
        id: 6,
        name: "farinha branca",
        description: "Pó fino obtido da moagem do trigo, usado como base para pães, bolos e outros.",
        image: "https://bing.com/th?id=OIP.37ptmS2hXg9KBJNnyLlyAQHaD_",
        calories: 362.6,
        serving_size_g: 100,
        fat_total_g: 1,
        fat_saturated_g: 0.2,
        protein_g: 10.2,
        sodium_mg: 2,
        potassium_mg: 106,
        cholesterol_mg: 0,
        carbohydrates_total_g: 77,
        fiber_g: 2.7,
        sugar_g: 0.3
      },
      {
        id: 7,
        name: "ovo",
        description: "Ingrediente fundamental na culinária, rico em proteínas e utilizado em diversas receitas.",
        image: "https://bing.com/th?id=OIP.ca-8ItIXZuO4sPab1YgmUwHaE8",
        calories: 144.3,
        serving_size_g: 100,
        fat_total_g: 9.4,
        fat_saturated_g: 3.1,
        protein_g: 12.6,
        sodium_mg: 143,
        potassium_mg: 200,
        cholesterol_mg: 373,
        carbohydrates_total_g: 0.7,
        fiber_g: 0,
        sugar_g: 0.4
      },
      {
        id: 9,
        name: "arroz",
        description: "Grão de cereal consumido mundialmente, base da alimentação em muitas culturas.",
        image: "",
        calories: 127.4,
        serving_size_g: 100,
        fat_total_g: 0.3,
        fat_saturated_g: 0.1,
        protein_g: 2.7,
        sodium_mg: 1,
        potassium_mg: 42,
        cholesterol_mg: 0,
        carbohydrates_total_g: 28.4,
        fiber_g: 0.4,
        sugar_g: 0.1
      },
      {
        id: 10,
        name: "queijo",
        description: "Alimento derivado do leite, com uma grande variedade de sabores e texturas.",
        image: "https://bing.com/th?id=OIP.lDqAUaaN4G-y16N6XuPM6wHaE8",
        calories: 393.9,
        serving_size_g: 100,
        fat_total_g: 33,
        fat_saturated_g: 18.9,
        protein_g: 22.7,
        sodium_mg: 661,
        potassium_mg: 459,
        cholesterol_mg: 100,
        carbohydrates_total_g: 3.2,
        fiber_g: 0,
        sugar_g: 0.5
      },
      {
        id: 11,
        name: "batata frita",
        description: "Batatas cortadas em tiras e fritas até ficarem crocantes, um petisco popular.",
        image: "https://bing.com/th?id=OIP.9poN-AQsX0Ge0sjjL7AMugHaER",
        calories: 317.7,
        serving_size_g: 100,
        fat_total_g: 14.8,
        fat_saturated_g: 2.3,
        protein_g: 3.4,
        sodium_mg: 212,
        potassium_mg: 124,
        cholesterol_mg: 0,
        carbohydrates_total_g: 41.1,
        fiber_g: 3.8,
        sugar_g: 0.3
      },
      {
        id: 12,
        name: "pão",
        description: "Alimento básico preparado com farinha e fermento, assado até formar uma crosta dourada.",
        image: "https://bing.com/th?id=OIP.moj3eWq9tGHHoKA7b180xgAAAA",
        calories: 261.6,
        serving_size_g: 100,
        fat_total_g: 3.4,
        fat_saturated_g: 0.7,
        protein_g: 8.8,
        sodium_mg: 495,
        potassium_mg: 98,
        cholesterol_mg: 0,
        carbohydrates_total_g: 50.2,
        fiber_g: 2.7,
        sugar_g: 5.7
      },
      {
        id: 13,
        name: "coxinha",
        description: "Salgado brasileiro em forma de gota, recheado com frango e envolto em massa de batata.",
        image: "https://bing.com/th?id=OIP.7pBYiygvwEzN4B-WPh_LvgHaFV",
        calories: 192.9,
        serving_size_g: 100,
        fat_total_g: 11.3,
        fat_saturated_g: 3.5,
        protein_g: 8,
        sodium_mg: 205,
        potassium_mg: 81,
        cholesterol_mg: 28,
        carbohydrates_total_g: 15.5,
        fiber_g: 0.9,
        sugar_g: 1.2
      },
      {
        id: 14,
        name: "sorvete",
        description: "Sobremesa gelada feita com leite ou creme, açúcar e sabores variados.",
        image: "https://bing.com/th?id=OIP.q1RcsojoCEH4-JSSFE2z8gHaE8",
        calories: 207.1,
        serving_size_g: 100,
        fat_total_g: 11,
        fat_saturated_g: 6.8,
        protein_g: 3.5,
        sodium_mg: 78,
        potassium_mg: 103,
        cholesterol_mg: 44,
        carbohydrates_total_g: 23.6,
        fiber_g: 0.7,
        sugar_g: 21.3
      }
  ];

  userDatabase: any[] = [
    {
      id: "teste123",
      name: "Felipe",
      email: "felipe@mail.com",
      dateOfBirth: "1983-10-21",
      password: "abcd",
      weightKg: 80,
      heightCm: 186
    },
  ];

  constructor(private router: Router){
    localStorage.setItem('foodList',JSON.stringify(this.foodList));
    console.log("Lista de alimentos salva com sucesso no Local Storage.");

    // Atenção: aqui estamos substituindo os dados que porventura estiverem:
    localStorage.setItem('userDatabase',JSON.stringify(this.userDatabase));
    console.log("Lista de pessoas usuárias salva com sucesso no Local Storage.");
  };

  // Para fazer com que o sidebar não apareça nas telas de login e cadastro (em combinação com um *ngIf no HTML):
  get isAuthPage(): boolean {
    const authPages = ['/login', '/register', '/cadastro', '/'];
    return authPages.includes(this.router.url);
  }



// Fim do componente
};

// SOBRE O ERRO "LOCAL STORAGE NOT DEFINED":
  // Lá no angular.json, onde tem:
  // "development": {
  //   "optimization": false,
  //   "extractLicenses": false,
  //   "sourceMap": true,
  //   "ssr": false, <- eu acrescentei essa linha para resolver o problema do localStorage not defined.
  //   "prerender": false <- eu acrescentei essa outra linha para resolver o problema do localStorage not defined.
  // }