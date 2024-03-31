import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, DialogModule, ReactiveFormsModule, CommonModule, DateFormatPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideAnimations(), provideNoopAnimations()]
})
export class HomeComponent {

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  listOfWorkouts = this.getWorkouts();

  newWorkout = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    date: new FormControl(''),
    distance: new FormControl(0),
    time: new FormControl(''),
  });

  workoutTypes = [
    {name: "Caminhada", image: "../../assets/images/workout-walk.jpg"},
    {name: "Corrida", image: "../../assets/images/workout-run.jpg"},
    {name: "Natação", image: "../../assets/images/workout-swim.jpg"},
    {name: "Bicicleta", image: "../../assets/images/workout-bike.jpg"},
    {name: "Dança", image: "../../assets/images/workout-dance.jpg"},
    {name: "Musculação", image: "../../assets/images/workout-weights.jpg"},
    {name: "Esporte", image: "../../assets/images/workout-sports.jpg"},
    {name: "Ioga", image: "../../assets/images/workout-yoga.jpg"}
  ];

  saveWorkout() {
    if (this.newWorkout.value.title && this.newWorkout.value.type && this.newWorkout.value.date) {
      let workouts = this.getWorkouts();

      let distance = typeof this.newWorkout.value.distance === 'number' ? this.newWorkout.value.distance : 0;

      this.addWorkout(this.newWorkout.value.title, this.newWorkout.value.type, this.newWorkout.value.date, distance, this.newWorkout.value.time);
      this.newWorkout.reset();
      this.visible = false;
      this.listOfWorkouts = this.getWorkouts();
    }
    else {
      alert("Preencha todos os campos obrigatórios.");
    }
  };

  getWorkouts() {
    const emptyDatabase: string[] = [];
    const workouts = localStorage.getItem("activities");
    if (!!workouts) {
      let parsedWorkouts = JSON.parse(workouts);

      // Decidi ordenar esta lista por data, para mostrar a lista de exercícios em ordem cronológica.
      parsedWorkouts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return parsedWorkouts;
    } else {
      localStorage.setItem("activities", JSON.stringify(emptyDatabase));
      return [];
    };
  };

  addWorkout(title: string, type: string, date: string, distance: number, time: any) {
    const newWorkout = {
      title: title,
      type: type,
      date: date,
      distance: distance,
      time: time,
    };
    let workouts = this.getWorkouts();
    workouts.push(newWorkout);
    localStorage.setItem("activities", JSON.stringify(workouts));
  };

  // editWorkout(title: string, type: string, date: string, distance: number, time: any) {
  //   this.newWorkout.value.title = title;
  //   this.newWorkout.value.type = type;
  //   this.newWorkout.value.date = date;
  //   this.newWorkout.value.distance = distance;
  //   this.newWorkout.value.time = time;
  //   this.visible = true;
  // }









// Fim do componente
}
