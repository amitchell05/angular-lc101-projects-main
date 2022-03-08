import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies: string[] = [
    "Toy Story",
    "The Shining",
    "Sleepless in Seattle",
    "The Martian",
  ];
  errorMessage: string = "";

  constructor() {}

  ngOnInit() {}

  addMovie(newTitle: string) {
    if (this.movies.includes(newTitle)) {
      this.errorMessage = `${newTitle} is already in your movie list.`;
    } else if (newTitle === "") {
      this.errorMessage = "Please enter a movie title.";
    } else {
      this.movies.push(newTitle);
    }
  }
}
