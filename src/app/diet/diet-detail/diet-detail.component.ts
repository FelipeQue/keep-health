import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent {

  foodName: string = "";
  food: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location){};

  getStorage(storageName: string) {
    const storage = localStorage.getItem(storageName);
    if (!!storage) {
      return JSON.parse(storage);
    } else {
      console.log("Não foi encontrada lista de alimentos.")
      return [];
    };
  };

  ngOnInit(){
    this.activatedRoute.params.subscribe((parameters)=>{
      this.foodName = parameters['id'];
    });
  let listOfFoods = this.getStorage("foodList");
  let searchedFoods = listOfFoods.filter((searchedFood: { name: string | undefined; }) => searchedFood.name == this.foodName);
  this.food = searchedFoods[0];
  };

  goBack() {
  this.location.back();
  }

}

