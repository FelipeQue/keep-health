import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {

  constructor(private router: Router) {}

  @Input() food: {image: string; name: string; description: string; } | undefined;

  listOfFoods = this.getStorage("foodList");

  getStorage(storageName: string) {
    const storage = localStorage.getItem(storageName);
    if (!!storage) {
      return JSON.parse(storage);
    } else {
      return [];
    };
  };

  listOfResults = this.listOfFoods;

  searchInput: string = "";

searchFood() {
  this.listOfResults = this.listOfFoods;
  this.listOfResults = this.listOfFoods.filter((searchedFood: { name: string | undefined; }) => searchedFood.name?.includes(this.searchInput.toLowerCase()));
};

redirectToDetail(name: string){
  this.router.navigate(["diet", name]);
}



}
