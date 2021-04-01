import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:'home', component:HomeComponent},
  {path:'quizdp', component:QuizComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
