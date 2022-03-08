import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = [];
  finishedChores = [
    "Complete LaunchCode prep work",
    "Buy groceries",
    "Clean kitchen",
    "Empty dishwasher",
  ];

  targetImage =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";

  constructor() {}

  isWorkingHard() {
    return this.chores.length < this.finishedChores.length;
  }

  isAllowanceAvailable() {
    return (
      this.chores.length === 0 ||
      this.finishedChores.length - this.chores.length >= 3
    );
  }

  areChoresComplete() {
    return this.chores.length === 0 && this.finishedChores.length >= 4;
  }

  ngOnInit(): void {}
}
