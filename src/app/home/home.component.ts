import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.newWorkout.reset();
    this.editingWorkout = null;
  }

  listOfWorkouts = this.getWorkouts();

  newWorkout = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    distance: new FormControl(0),
    time: new FormControl(''),
  });

  workoutTypes = [
    {name: "Caminhada", image: "../../assets/images/workout-walk.png"},
    {name: "Corrida", image: "../../assets/images/workout-run.png"},
    {name: "Natação", image: "../../assets/images/workout-swim.png"},
    {name: "Bicicleta", image: "../../assets/images/workout-bike.png"},
    {name: "Dança", image: "../../assets/images/workout-dance.png"},
    {name: "Musculação", image: "../../assets/images/workout-weights.png"},
    {name: "Esporte", image: "../../assets/images/workout-sports.png"},
    {name: "Ioga", image: "../../assets/images/workout-yoga.png"}
  ];

  editingWorkout: any = null;

  saveWorkout() {
    if (this.newWorkout.value.title && this.newWorkout.value.type && this.newWorkout.value.date) {
      let workouts = this.getWorkouts();

      let distance = typeof this.newWorkout.value.distance === 'number' ? this.newWorkout.value.distance : 0;

      if (this.editingWorkout) {
        // Caso esteja editando uma atividade:
        let index = workouts.findIndex((workout: { title: any; type: any; date: any; distance: any; time: any; }) => 
          workout.title == this.editingWorkout.title &&
          workout.type == this.editingWorkout.type &&
          workout.date == this.editingWorkout.date &&
          workout.distance == this.editingWorkout.distance &&
          workout.time == this.editingWorkout.time
        );
        if (index > -1) {
          workouts[index] = this.newWorkout.value;
        }
        localStorage.setItem("activities", JSON.stringify(workouts));
      } else {
        // Adicionar novo exercício:
      this.addWorkout(this.newWorkout.value.title, this.newWorkout.value.type, this.newWorkout.value.date, distance, this.newWorkout.value.time);
      this.newWorkout.reset();
      }
      this.visible = false;
      this.listOfWorkouts = this.getWorkouts();
      this.editingWorkout = null;
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

  // Chama a funcionalidade de editar o exercício através do card:
  openWorkout(workout: any) {
    this.editingWorkout = workout;
    this.newWorkout.setValue(workout);
    this.visible = true;
  };

  deleteWorkout() {
    if (this.editingWorkout) {
      if (confirm("Tem certeza que deseja apagar essa atividade? Esta ação será irreversível.")) {
      let workouts = this.getWorkouts();
      let index = workouts.findIndex((workout: { title: any; type: any; date: any; distance: any; time: any; }) => 
        workout.title === this.editingWorkout.title &&
        workout.type === this.editingWorkout.type &&
        workout.date === this.editingWorkout.date &&
        workout.distance === this.editingWorkout.distance &&
        workout.time === this.editingWorkout.time
      );
      if (index > -1) {
        workouts.splice(index, 1);
        localStorage.setItem("activities", JSON.stringify(workouts));
      }
      this.newWorkout.reset();
      this.editingWorkout = null;
      this.visible = false;
      this.listOfWorkouts = this.getWorkouts();
    }
    }
  };

// Fim do componente
}
