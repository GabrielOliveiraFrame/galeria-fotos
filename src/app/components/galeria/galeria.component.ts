import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input()
  titulo!: string;

  @Input()
  fotos!: string[];

  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextImg(){
    this.index++;
  }

  prevImg(){
    this.index--;
  }

  firstImg(){
    this.index = 0;
  }

  lastImg(){
    this.index = this.fotos.length - 1;
  }

}
