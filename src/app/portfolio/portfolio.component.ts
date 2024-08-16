import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [LineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images=[
    "../../assets/images/poert1.png",
    "../../assets/images/port2.png",
    "../../assets/images/port3.png",
    "../../assets/images/poert1.png",
    "../../assets/images/port2.png",
    "../../assets/images/port3.png",
  ]

  image:string=''
  isModalOpened:boolean=true
   displayModal(img:string){
     this.image=img
     if (this.isModalOpened==true) {
      this.isModalOpened=false
    }
  }
  closeModal(){
    if (this.isModalOpened==false) {
      this.isModalOpened=true
    }
  }






}
