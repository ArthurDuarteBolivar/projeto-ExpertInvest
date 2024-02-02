import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { B3Service } from 'src/app/service/b3.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls:['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit{

  constructor(private b3Service: B3Service){}

  news: News[] = []
  times: number = 1;
  isLoaded: boolean = false;

  ngOnInit(){
    this.b3Service.getNewsList(1).subscribe(res => {
      this.news = res
      this.isLoaded = true;
    })
  }

  loadMore(){
    this.times += 1;
    this.b3Service.getNewsList(this.times).subscribe(res => {
      this.news.push(...res)
    })
  }
  
  calcularDiferencaTempo(dataString: string): string {
    const agora = new Date();
    const data = new Date(dataString);
  
    if (isNaN(data.getTime())) {
      // Verifica se a conversão falhou
      return 'Data inválida';
    }
  
    const diferenca = agora.getTime() - data.getTime();
  
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    if (dias > 0) {
      return `${dias} dia${dias > 1 ? 's' : ''} atrás`;
    } else if (horas > 0) {
      return `${horas} hora${horas > 1 ? 's' : ''} atrás`;
    } else if (minutos > 0) {
      return `${minutos} minuto${minutos > 1 ? 's' : ''} atrás`;
    } else {
      return 'Agora mesmo';
    }
  }
  

}
