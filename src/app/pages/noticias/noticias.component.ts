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
  newsBusiness: News[] = []
  newsTechnology: News[] = []
  newsEntertainment: News[] = []
  newsSports: News[] = []
  newsScience: News[] = []
  newsHealth: News[] = []
  times: number = 1;
  timesBusiness: number = 1;
  timesTechnology: number = 1;
  timesEntertainment: number = 1;
  timesSports: number = 1;
  timesScience: number = 1;
  timesHealth: number = 1;
  isLoaded: boolean = true;

  ngOnInit(){
    this.b3Service.getNewsList(1).subscribe(res => {
      this.news = res
      this.isLoaded = true;
    })
    this.b3Service.getNew("business", 1).subscribe(res => {
      this.newsBusiness = res
    })
    this.b3Service.getNew("technology", 1).subscribe(res => {
      this.newsTechnology = res
    })
    this.b3Service.getNew("entertainment", 1).subscribe(res => {
      this.newsEntertainment = res
    })
    this.b3Service.getNew("sports", 1).subscribe(res => {
      this.newsSports = res
    })
    this.b3Service.getNew("health", 1).subscribe(res => {
      this.newsHealth = res
    })
    this.b3Service.getNew("science", 1).subscribe(res => {
      this.newsScience = res
    })
  }

  loadMore(topics: string){
    if(topics == ""){
      this.times += 1;
      this.b3Service.getNewsList(this.times).subscribe(res => {
        this.news.push(...res)
      })
    }else if(topics == "business"){
      this.timesBusiness += 1;
      this.b3Service.getNew(topics ,this.timesBusiness).subscribe(res => {
        this.newsBusiness.push(...res)
      })

    }else if(topics == "technology"){
      this.timesTechnology += 1;
      this.b3Service.getNew(topics ,this.timesTechnology).subscribe(res => {
        this.newsTechnology.push(...res)
      })
      
    }else if(topics == "entertainment"){
       this.timesEntertainment += 1;
      this.b3Service.getNew(topics ,this.timesEntertainment).subscribe(res => {
        this.newsEntertainment.push(...res)
      })
      
    }else if(topics == "sports"){
       this.timesSports += 1;
      this.b3Service.getNew(topics ,this.timesSports).subscribe(res => {
        this.newsSports.push(...res)
      })
      
    }else if(topics == "health"){
       this.timesHealth += 1;
      this.b3Service.getNew(topics ,this.timesHealth).subscribe(res => {
        this.newsHealth.push(...res)
      })
      
    }else if(topics == "science"){
       this.timesScience += 1;
      this.b3Service.getNew(topics ,this.timesScience).subscribe(res => {
        this.newsScience.push(...res)
      })
      
    }
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
