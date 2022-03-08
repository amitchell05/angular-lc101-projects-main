import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"],
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  jokeHeading: string = "Joke Buttons";
  goldInactive: boolean = false;
  silverInactive: boolean = false;
  copperInactive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleActivation() {
    this.goldInactive = !this.goldInactive;
    this.silverInactive = !this.silverInactive;
    this.copperInactive = !this.copperInactive;
  }
}
