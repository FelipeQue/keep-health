import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let userDatabase = localStorage.getItem("userDatabase");
  let user = null;
  if (!!userDatabase) {
    let userDatabaseSt = JSON.parse(userDatabase);
    if (!!userDatabaseSt) {
      user = userDatabaseSt.find((user: { auth: boolean | null | undefined; }) => user.auth == true);
    };
  };
  if (user) {
    // console.log("Guarda liberou!");
    return true;
  } else {
    // console.log("Guarda não deixou!");
    router.navigate(["login"]);
    return false;
  };

};






