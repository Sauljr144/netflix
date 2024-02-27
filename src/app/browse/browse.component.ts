import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/services/Auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../share/components/header/header.component';
import { BannerComponent } from '../share/components/banner/banner.component';
import { MovieService } from '../share/services/movie.service';
import { MovieCarouselComponent } from '../share/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../share/models/video-content.interface';

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

  popularMovies: IVideoContent[] = []

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      console.log(data);
      this.popularMovies = data.results;
    })
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");

    this.auth.signOut();

  }


}
