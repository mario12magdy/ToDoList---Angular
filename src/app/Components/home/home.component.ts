import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewMission } from '../../new-mission';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  tableBoolean: boolean = false;


  newMission: NewMission = {
    mission: "",
    details: ""
  };

  missions: NewMission[] = []

  ngOnInit(): void {
    const missionsL = localStorage.getItem("missions")
    if (missionsL != null) {
      this.missions = JSON.parse(missionsL)
      if (this.missions.length > 0) {
        this.tableBoolean = true;
      }

    }
  }






  addMission(input1: any, input2: any) {

    if (this.newMission.mission !== "") {
      this.missions.push(this.newMission)


      input1.value = "";
      input2.value = "";

      this.tableBoolean = true;

      localStorage.setItem("missions", JSON.stringify(this.missions))





    }
  }

  deleteMission(index: number): void {
    this.missions.splice(index, 1)
    localStorage.setItem("missions", JSON.stringify(this.missions))

    if (this.missions.length == 0) {
      this.tableBoolean = false;

    }


  }
  editMission(index: number): void {
    if (this.newMission.mission !== "") {
      this.missions[index] = { ...this.newMission }
      localStorage.setItem("missions", JSON.stringify(this.missions))

    }
  }

  deleteAll():void{
    this.missions=[]
    localStorage.setItem("missions", JSON.stringify(this.missions))
    this.tableBoolean =false;

  }



}

