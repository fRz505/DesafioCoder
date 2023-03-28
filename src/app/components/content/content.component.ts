import { Component, OnInit } from '@angular/core';
type Alumno = { id: number; name: string, lastName: string; date: Date}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  alumnos: Alumno[] = [
    { id: 1, name: "Carlos", lastName: 'Sanchez', date: new Date() },
    { id: 2, name: "Javier", lastName: 'Torres' , date: new Date() },
    { id: 3, name: "Franco", lastName: 'Marquillas' , date: new Date() },
    { id: 4, name: "Ariel", lastName: 'Gonzalez' , date: new Date() },
    { id: 5, name: "Lucas", lastName: 'Gutierrez' , date: new Date() }
  ];

  constructor() { }
  ngOnInit() {
  }

}
