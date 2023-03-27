import { Component, OnInit } from '@angular/core';
type Alumno = Array<{ id: number; name: string, lastName: string; }>
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  alumnos: Alumno = [
    { id: 1, name: "Carlos", lastName: 'Sanchez' },
    { id: 2, name: "Javier", lastName: 'Torres' },
    { id: 3, name: "Franco", lastName: 'Marquillas' },
    { id: 4, name: "Ariel", lastName: 'Gonzalez' },
    { id: 5, name: "Lucas", lastName: 'Gutierrez' }
  ];
  constructor() { }
  ngOnInit() {
  }

}
