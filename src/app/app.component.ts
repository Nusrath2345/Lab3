import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component'; //imports compA
import { BComponent } from './b/b.component'; //imports CompB

//metadata
@Component({
  selector: 'root-directive', //defines custom html tag for this component
  imports: [RouterOutlet, AComponent, BComponent],  //imports comp A + B
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  name: string = "Nusrath"; //defines name property
  age: number = 20; //defines age property
 
}
