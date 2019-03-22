import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sonda } from './model';
import { SondaService } from './sonda.service';

@Component({
  selector: 'app-sonda',
  templateUrl: './sonda.component.html',
  styleUrls: ['./sonda.component.css']
})
export class SondaComponent implements OnInit  {

  sonda = new Sonda();
  mostrarSaida: boolean = false
  saida = {};
  constructor(private sondaService : SondaService) { }
  
  ngOnInit() {
  }

  


  enviar(form: FormControl) {
    this.sondaService.postSonda(this.sonda).subscribe(dado => {
      this.saida = {
        x : dado.posicao.x,
        y : dado.posicao.y,
        c : dado.direcaoCardinal
      }
      form.reset();
      this.mostrarSaida = true;
      this.sonda = new Sonda();
    });
  }

    

}
