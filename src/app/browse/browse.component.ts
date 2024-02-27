import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/services/Auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../share/components/header/header.component';
import { BannerComponent } from '../share/components/banner/banner.component';
import { MovieService } from '../share/services/movie.service';
import { MovieCarouselComponent } from '../share/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../share/models/video-content.interface';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent,BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
  constructor(private auth: AuthService, private movieService: MovieService) {}

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;


  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRated: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  source = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
    this.movieService.getUpcomingMovies()
  ]

  ngOnInit(): void {

    forkJoin(this.source).pipe(map(([movies,tvshows,ratedMovies,nowPlayingMovies,popularMovies,topRated,upcomingMovies]) => {
      return {movies,tvshows,ratedMovies,nowPlayingMovies,popularMovies,topRated, upcomingMovies}
    })).subscribe((res:any) => {
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvshows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlayingMovies.results as IVideoContent[];
      this.popularMovies = res.popularMovies.results as IVideoContent[];
      this.topRated = res.topRated.results as IVideoContent[];
      this.upcomingMovies = res.upcomingMovies.results as IVideoContent[];3
    });
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");

    this.auth.signOut();

  }


}
