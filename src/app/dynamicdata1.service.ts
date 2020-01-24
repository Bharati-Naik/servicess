import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Dynamicdata1Service {

  constructor(private news:HttpClient) { }

  getuser(){
    return this.news.get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=aa02edf1cc3742d28613a6c54b1468cd')
  }


}
