import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LineComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
