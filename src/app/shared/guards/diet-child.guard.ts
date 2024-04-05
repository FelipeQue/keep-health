import { CanActivateChildFn, Router } from '@angular/router';

export const dietChildGuard: CanActivateChildFn = (childRoute, state) => {
  let router = new Router;
  let foodList = [];
  let foodListString = localStorage?.getItem("foodList");
  if (foodListString !== null) {
    foodList = JSON.parse(foodListString);
  };
  if (foodList?.some((food: { name: string; }) => food.name.toLowerCase().includes(childRoute.params["id"].toLowerCase()))) {
    return true;
  };
  router.navigate(["diet"]);
  alert("Alimento não consta em nosso banco de dados.")
  return false;
};