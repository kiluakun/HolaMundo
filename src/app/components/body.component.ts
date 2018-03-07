import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html' 
})

export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: 'Yes... indeed...',
    autor: 'Firelink Shrine Handmaiden',
    from: 'Dark Souls III'
  }

  juegos: string[] = [
    "Dark Souls III", "Bloodborne", "Dark Souls Remastered"
  ];
}
