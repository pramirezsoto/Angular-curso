import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})




export class ListadoComponent {

 heroes: string[] = ["Spider", "Ironman", "Hulk" ,"potoloco" ,"Thor"];
heroeBorrado:string = "";

 borrarHeroe(){
 
  this.heroeBorrado  = this.heroes.shift() || "";
 }
 
}

