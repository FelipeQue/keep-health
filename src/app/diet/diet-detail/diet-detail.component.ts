import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent {

  foodName: string = "";
  food: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router){};

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
      // console.log(parameters);
      // this.foodName = parameters.id; <- esse não funciona.
      this.foodName = parameters['id'];
    });
    
  let listOfFoods = this.getStorage("foodList");

  let searchedFoods = listOfFoods.filter((searchedFood: { name: string | undefined; }) => searchedFood.name == this.foodName);

  this.food = searchedFoods[0];

  




  };


}

