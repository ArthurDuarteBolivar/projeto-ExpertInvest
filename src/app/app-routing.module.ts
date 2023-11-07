import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JurosCompostosComponent } from './components/juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './components/juros-simples/juros-simples.component';
import { ConsumoCombustivelComponent } from './components/consumo-combustivel/consumo-combustivel.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"calculadoras/calculadoras-juros-compostos", component: JurosCompostosComponent},
  {path: "calculadoras/calculadora-juros-simples", component: JurosSimplesComponent},
  {path: "calculadoras/calculo-de-combustivel", component: ConsumoCombustivelComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
