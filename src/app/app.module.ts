import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { JurosCompostosComponent } from './components/juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './components/juros-simples/juros-simples.component';
import { JurosFeriasComponent } from './components/juros-ferias/juros-ferias.component';
import { RendimentosDaPoupancaComponent } from './components/rendimentos-da-poupanca/rendimentos-da-poupanca.component';
import { InvestimentoComponent } from './components/investimento/investimento.component';
import { DecimoTerceiroComponent } from './components/decimo-terceiro/decimo-terceiro.component';
import { FgtsComponent } from './components/fgts/fgts.component';
import { RescisaoComponent } from './components/rescisao/rescisao.component';
import { PorcentagemComponent } from './components/porcentagem/porcentagem.component';
import { HeaderPageComponent } from './shared/header-page/header-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ConsumoCombustivelComponent } from './components/consumo-combustivel/consumo-combustivel.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JurosCompostosComponent,
    JurosSimplesComponent,
    JurosFeriasComponent,
    RendimentosDaPoupancaComponent,
    InvestimentoComponent,
    DecimoTerceiroComponent,
    FgtsComponent,
    RescisaoComponent,
    PorcentagemComponent,
    HeaderPageComponent,
    ConsumoCombustivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbDropdownModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbPopoverModule
  ],
  providers: [provideNgxMask(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
