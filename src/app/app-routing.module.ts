import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JurosCompostosComponent } from './components/juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './components/juros-simples/juros-simples.component';
import { ConsumoCombustivelComponent } from './components/consumo-combustivel/consumo-combustivel.component';
import { DecimoTerceiroComponent } from './components/decimo-terceiro/decimo-terceiro.component';
import { PorcentagemComponent } from './components/porcentagem/porcentagem.component';
import { InvestimentoComponent } from './components/investimento/investimento.component';
import { AcoesComponent } from './components/acoes/acoes.component';
import { CalculadorasComponent } from './pages/calculadoras/calculadoras.component';
import { IbovAcoesComponent } from './pages/ibov-acoes/ibov-acoes.component';
import { IndicesComponent } from './pages/indices/indices.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "calculadoras", component: CalculadorasComponent},
  {path:"calculadoras/calculadoras-juros-compostos", component: JurosCompostosComponent},
  {path: "calculadoras/calculadora-juros-simples", component: JurosSimplesComponent},
  {path: "calculadoras/calculo-de-combustivel", component: ConsumoCombustivelComponent},
  {path: "calculadoras/calculadora-decimo-terceiro", component: DecimoTerceiroComponent},
  {path: "calculadoras/calculadora-de-porcentagem", component: PorcentagemComponent},
  {path: "fii", component: InvestimentoComponent},
  {path: "fii/:name", component: AcoesComponent},
  {path: "acoes/:name", component: IbovAcoesComponent},
  {path: "indices/:name", component: IndicesComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
