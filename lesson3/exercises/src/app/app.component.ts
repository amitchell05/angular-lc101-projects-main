import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeOffEnabled: boolean = false;

  handleTakeOff(rocket) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.takeOffEnabled = true;
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      rocket.style.bottom = "10px";
    }
  }

  handleLanding(rocket) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.takeOffEnabled = false;
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    rocket.style.bottom = "0px";
  }

  handleAbortMission(rocket) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.takeOffEnabled = false;
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocket.style.bottom = "0px";
    }
  }

  moveRocket(rocket, direction: string) {
    let movement = "";

    if (direction === "left") {
      movement = parseInt(rocket.style.left) + 10 + "px";
      rocket.style.left = movement;
      this.width -= 10000;
    } else if (direction === "right") {
      movement = parseInt(rocket.style.left) - 10 + "px";
      this.width += 10000;
      rocket.style.left = movement;
    } else if (direction === "up") {
      movement = parseInt(rocket.style.bottom) + 10 + "px";
      rocket.style.bottom = movement;
      this.height += 10000;
    } else if (direction === "down") {
      movement = parseInt(rocket.style.bottom) - 10 + "px";
      rocket.style.bottom = movement;
      this.height -= 10000;
    }

    this.rocketCloseToEdge();

    return movement;
  }

  rocketCloseToEdge() {
    if (this.height === 0 || this.height === 330000) {
      this.color = "orange";
      return true;
    } else if (this.width === 20000 || this.width === -380000) {
      this.color = "orange";
      return true;
    }

    this.color = "blue";
    return false;
  }
}
