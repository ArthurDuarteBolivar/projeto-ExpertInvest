import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, isDevMode } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AcoesComponent } from './components/acoes/acoes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalculadorasComponent } from './pages/calculadoras/calculadoras.component';
import { CustomNumberPipe } from './pipe/custom-number.pipe';
import { CustomNumberFormatPipe } from './pipe/custom-number-format.pipe';
import { IbovAcoesComponent } from './pages/ibov-acoes/ibov-acoes.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { DyContainerComponent } from './components/dy-container/dy-container.component';
import { CardComponent } from './components/card/card.component';
import { IndicesComponent } from './pages/indices/indices.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { TopInfoIndiceComponent } from './components/top-info-indice/top-info-indice.component';
import { SegmentoComponent } from './components/segmento/segmento.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JurosCompostosComponent,
    JurosSimplesComponent,
    JurosFeriasComponent,
    InvestimentoComponent,
    DecimoTerceiroComponent,
    FgtsComponent,
    RescisaoComponent,
    PorcentagemComponent,
    HeaderPageComponent,
    ConsumoCombustivelComponent,
    AcoesComponent,
    CalculadorasComponent,
    CustomNumberPipe,
    CustomNumberFormatPipe,
    IbovAcoesComponent,
    TopInfoComponent,
    BottomInfoComponent,
    DyContainerComponent,
    CardComponent,
    IndicesComponent,
    IndicatorsComponent,
    CardInfoComponent,
    TopInfoIndiceComponent,
    SegmentoComponent,
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
    NgbPopoverModule,
    HttpClientModule,
    NgxChartsModule,
    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    MatSliderModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
