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

  dietId: string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router){};

  ngOnInit(){
    this.activatedRoute.params.subscribe((parameters)=>{
      console.log(parameters);
      // this.musicId = parametros.identificador; <- esse não funciona.
      this.dietId = parameters['id'];
    });    
    console.log(this.router.url); // É assim que a gente descobre se a tela é para ser create ou update, daí mandamo um if this.router.url é create etc etc.
  };


}

