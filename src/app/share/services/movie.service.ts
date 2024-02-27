import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options = {
  params:{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers:{
    accept: 'application/json',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjU1MzI0YWViNWM3Njk2YzgwMGNmNGZiYTM2ZWE1OCIsInN1YiI6IjY1ZDY5MzBmYzVjMWVmMDE3ZDhiMzllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N9uoMpZ7yNwnr1F_kA1QwXLAT1zzINDUrFIiS0Ry_lU'

  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }
}
